const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || process.env.URL?.trim();

export const siteUrl = (configuredUrl || "http://localhost:3000").replace(
  /\/$/,
  "",
);
