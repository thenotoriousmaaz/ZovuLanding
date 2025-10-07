This is a Next.js 15 + TypeScript + Tailwind CSS project with shadcn/ui, Framer Motion, React Hook Form + Zod, Mongoose (MongoDB), Resend (emails), and Plausible analytics.

## Getting Started

## Setup

1. Copy `ENV.example` to `.env.local` and fill values:

```
MONGODB_URI=...
MONGODB_DB=...
RESEND_API_KEY=...
VENDOR_NOTIFY_EMAIL_FROM=...
VENDOR_NOTIFY_EMAIL_TO=...
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

2. Install dependencies:

```
npm install
```

3. Run the development server (Turbopack):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Vendor Signup

- API: `POST /api/vendor-signup` with JSON `{ companyName, contactName, email, phone?, website? }`
- Page: `/vendor-signup` form with validation; on submit, saves to MongoDB and sends notification email via Resend.

## Deployment (Vercel)

- Set the following environment variables in the Vercel project:
  - `MONGODB_URI`, `MONGODB_DB`, `RESEND_API_KEY`, `VENDOR_NOTIFY_EMAIL_FROM`, `VENDOR_NOTIFY_EMAIL_TO`, `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- Use default Next.js build settings. No custom server required.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
