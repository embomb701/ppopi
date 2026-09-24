# The Peptide Papi

A Next.js 16 brand website prepared for deployment on Netlify.

## Local development

Use Node.js 22 and install the locked dependencies:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
npx netlify build --offline
```

## Environment variables

Copy `.env.example` to `.env` for local development. The populated `.env` file is ignored by Git.

- `NEXT_PUBLIC_SITE_URL`: canonical production URL; Netlify's build URL is used automatically when this is unset.
- `GITHUB_TOKEN`: local GitHub authentication only; never add it to Netlify or commit it.
- `GITHUB_REPO`: GitHub repository in `owner/repository` format.

## Netlify deployment

The repository includes `netlify.toml`, Node.js 22 configuration, and Netlify's Next.js runtime plugin.

For a Git-connected deployment:

1. Import the GitHub repository into Netlify.
2. Netlify reads the build command and publish directory from `netlify.toml`.
3. Set `NEXT_PUBLIC_SITE_URL` to the final production domain after the site/domain is assigned, then redeploy.

For a CLI deployment from this directory:

```bash
npx netlify deploy --build
```

Add `--prod` only when the preview has been checked and is ready for production.
