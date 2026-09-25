declare const Deno: { env: { get(name: string): string | undefined } };

const COOKIE_NAME = "pp_access_verified";
const COOKIE_VALUE = "yes";
const TOKEN_MAX_AGE_MS = 10 * 60 * 1000;
const ACCESS_MAX_AGE = 60 * 60 * 24 * 30;
const SECRET = Deno.env.get("SITE_ACCESS_SECRET") || "peptide-papi-access-gate-v1";

const textEncoder = new TextEncoder();

function base64UrlEncode(input: string | Uint8Array) {
  const bytes = typeof input === "string" ? textEncoder.encode(input) : input;
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlDecode(input: string) {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (input.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

async function hmac(message: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    textEncoder.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, textEncoder.encode(message));
  return base64UrlEncode(new Uint8Array(signature));
}

async function createToken(answer: number) {
  const payload = base64UrlEncode(JSON.stringify({ answer, ts: Date.now() }));
  return `${payload}.${await hmac(payload)}`;
}

async function validateToken(token: string, answer: string) {
  const [payload, signature] = token.split(".");
  if (!payload || !signature || signature !== await hmac(payload)) return false;

  try {
    const parsed = JSON.parse(base64UrlDecode(payload));
    if (Date.now() - Number(parsed.ts) > TOKEN_MAX_AGE_MS) return false;
    return String(parsed.answer) === answer.trim();
  } catch {
    return false;
  }
}

function shouldGate(request: Request) {
  const url = new URL(request.url);
  if (request.method !== "GET" && request.method !== "POST") return false;
  if (url.pathname.startsWith("/_next/") || url.pathname.startsWith("/.netlify/")) return false;
  if (url.pathname === "/favicon.ico" || url.pathname === "/favicon.svg" || url.pathname === "/robots.txt" || url.pathname === "/sitemap.xml") return false;
  if (/\.(?:png|jpe?g|webp|gif|svg|ico|css|js|mjs|map|txt|xml|json|woff2?|ttf|otf|mp4|webm|pdf)$/i.test(url.pathname)) return false;
  return true;
}

function hasVerifiedCookie(request: Request) {
  const cookie = request.headers.get("cookie") || "";
  return cookie.split(";").some((part) => part.trim() === `${COOKIE_NAME}=${COOKIE_VALUE}`);
}

function getClientHints(request: Request) {
  const userAgent = request.headers.get("user-agent") || "";
  return {
    isLikelyBot: /bot|crawler|spider|preview|facebookexternalhit|slurp|bingbot|googlebot|duckduckbot|yandex/i.test(userAgent),
  };
}

async function challengePage(request: Request, error = "") {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 2;
  const token = await createToken(a + b);
  const { isLikelyBot } = getClientHints(request);
  const url = new URL(request.url);
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <title>Access Check | The Peptide Papi</title>
  <style>
    :root { color-scheme: dark; --blue:#6cb7ff; --deep:#03060e; --line:rgba(255,255,255,.16); }
    * { box-sizing: border-box; }
    body { margin:0; min-height:100vh; display:grid; place-items:center; padding:24px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color:#f4f8ff; background: radial-gradient(circle at top, rgba(47,134,255,.25), transparent 30%), linear-gradient(180deg,#02040b,#060b16 48%,#03060e); }
    .card { width:min(100%, 480px); border:1px solid var(--line); border-radius:28px; background:rgba(255,255,255,.07); box-shadow:0 24px 80px rgba(0,0,0,.45); padding:28px; }
    .badge { display:inline-flex; border:1px solid rgba(108,183,255,.5); border-radius:999px; color:var(--blue); padding:6px 10px; font-size:12px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; }
    h1 { margin:18px 0 10px; font-size:clamp(30px, 8vw, 44px); line-height:1; letter-spacing:-.05em; }
    p { color:rgba(244,248,255,.75); line-height:1.6; }
    label { display:block; margin-top:18px; font-weight:800; }
    input[type="text"] { width:100%; min-height:50px; margin-top:8px; border:1px solid var(--line); border-radius:16px; background:rgba(2,6,16,.9); color:white; padding:0 14px; font-size:18px; outline:none; }
    input[type="text"]:focus { border-color:var(--blue); box-shadow:0 0 0 4px rgba(108,183,255,.12); }
    .choice-row { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px; }
    .choice { display:flex; align-items:center; gap:10px; border:1px solid var(--line); border-radius:16px; background:rgba(2,6,16,.75); min-height:50px; padding:0 14px; cursor:pointer; }
    .choice input { width:18px; height:18px; accent-color:#6cb7ff; }
    .error { margin-top:14px; border:1px solid rgba(255,109,109,.45); border-radius:14px; color:#ffd6d6; background:rgba(255,74,74,.12); padding:10px 12px; }
    button { width:100%; min-height:52px; margin-top:22px; border:1px solid rgba(108,183,255,.75); border-radius:999px; background:linear-gradient(135deg,#eef5ff 0%,#6cb7ff 45%,#2f86ff 100%); color:#03101d; font-weight:900; font-size:16px; cursor:pointer; }
    .note { margin-top:16px; font-size:12px; color:rgba(244,248,255,.58); }
  </style>
</head>
<body>
  <main class="card" aria-labelledby="gate-title">
    <span class="badge">Access check</span>
    <h1 id="gate-title">Quick verification</h1>
    <p>Please confirm you are 18 or older and complete the simple captcha before entering.</p>
    ${isLikelyBot ? `<p class="error">Automated browser detected. Human verification is required.</p>` : ""}
    ${error ? `<p class="error">${error}</p>` : ""}
    <form method="post" action="${url.pathname}${url.search}">
      <input type="hidden" name="token" value="${token}">
      <label>Are you 18 or older?</label>
      <div class="choice-row" role="radiogroup" aria-label="Age confirmation">
        <label class="choice"><input type="radio" name="age" value="yes" required> Yes</label>
        <label class="choice"><input type="radio" name="age" value="no" required> No</label>
      </div>
      <label for="captcha">Captcha: what is ${a} + ${b}?</label>
      <input id="captcha" name="captcha" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" required>
      <button type="submit">Enter site</button>
      <p class="note">This gate helps reduce automated bot traffic. Access confirmation is saved in this browser.</p>
    </form>
  </main>
</body>
</html>`;

  return new Response(html, {
    status: 403,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store, max-age=0",
    },
  });
}

export default async function handler(request: Request, context: any) {
  if (!shouldGate(request) || hasVerifiedCookie(request)) {
    return context.next();
  }

  if (request.method === "POST") {
    const form = await request.formData();
    const age = String(form.get("age") || "");
    const captcha = String(form.get("captcha") || "");
    const token = String(form.get("token") || "");

    if (age !== "yes") {
      return challengePage(request, "You must confirm you are 18 or older to enter.");
    }

    if (!await validateToken(token, captcha)) {
      return challengePage(request, "Captcha did not match. Please try again.");
    }

    return new Response(null, {
      status: 303,
      headers: {
        "location": new URL(request.url).pathname + new URL(request.url).search,
        "set-cookie": `${COOKIE_NAME}=${COOKIE_VALUE}; Max-Age=${ACCESS_MAX_AGE}; Path=/; Secure; HttpOnly; SameSite=Lax`,
        "cache-control": "no-store, max-age=0",
      },
    });
  }

  return challengePage(request);
}
