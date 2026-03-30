This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Production hosting (Firebase — Next + Flutter web)

The live site at **https://www.studiely.com** serves the Next.js marketing export at the root (`/`, `/blog`, `/pricing`, …) and the Flutter web app under **`/app/`** (`/app`, `/app/notes`, `/app/library`, …) from a single Firebase Hosting project (`eduplayce-5e68d`).

**Canonical deploy:** from this repo, run `npm run deploy:firebase` (or `predeploy:firebase` then `firebase deploy --only hosting`). That runs `npm run build`, merges `out/` into `deploy/`, copies the Flutter web build into `deploy/app/` (from `FLUTTER_WEB_BUILD` or by syncing from production), then deploys.

**Flutter web build** (in the EduPlayce repo) must use `--base-href /app/` and output copied to `deploy/app/` or the path set in `FLUTTER_WEB_BUILD`. See EduPlayce `deploy.sh` for the exact build steps.

**Do not** run `firebase deploy --only hosting` from the EduPlayce repo for the full public site: that configuration targets Flutter-only `build/web` and omits the Next export. Use it only for Flutter-only testing or emulators.

Links from Next to the Flutter app use `lib/appUrls.ts` (`STUDIELY_APP_*`); override with `NEXT_PUBLIC_STUDIELY_APP_ORIGIN` for local or staging.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
