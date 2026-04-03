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

## Template System

This project uses a **config-driven preset system** so you can customize client demos in minutes without editing individual components.

### Architecture

```
content/
  types.ts                         # Shared TypeScript types for all config
  clients/
    sample-dental.ts               # Current live site preset
    dental-clinic-template.ts      # Generic placeholder preset
    index.ts                       # Barrel exports
lib/
  site-config.ts                   # Preset loader (reads NEXT_PUBLIC_PRESET)
```

### How to Switch the Active Preset

**Option A — Environment variable (recommended for deploys):**

```bash
# In .env.local or your hosting provider's env settings:
NEXT_PUBLIC_PRESET=sample-dental
```

**Option B — Code change (quick local toggle):**

Edit `lib/site-config.ts` and change the fallback:

```ts
const activePresetId = process.env.NEXT_PUBLIC_PRESET || "sample-dental";
//                                                        ^^^^^^^^^^^^^^
//                                               change this to your preset ID
```

### How to Add a New Client Preset

1. **Copy** `content/clients/dental-clinic-template.ts` → `content/clients/my-new-client.ts`
2. **Edit** the fields in the new file (see "Fields to Edit" below)
3. **Register** the preset in `lib/site-config.ts`:
   ```ts
   import { myNewClient } from "@/content/clients";
   // ...
   const presets: Record<string, SiteConfig> = {
     "sample-dental": sampleDental,
     "dental-clinic-template": dentalClinicTemplate,
     "my-new-client": myNewClient,  // ← add here
   };
   ```
4. **Export** the preset from `content/clients/index.ts`:
   ```ts
   export { default as myNewClient } from "./my-new-client";
   ```
5. **Set** `NEXT_PUBLIC_PRESET=my-new-client` and run `npm run dev`

### Fields to Edit for a New Client Demo

| Field | Location in preset | What it controls |
|-------|-------------------|-----------------|
| `business.name` | Top-level | Header, footer, copyright, emails |
| `business.phone` / `phoneDisplay` | Top-level | All call links & displayed numbers |
| `business.email` | Top-level | Contact page, footer, email notifications |
| `business.whatsappNumber` | Top-level | WhatsApp floating button + all WA links |
| `business.address` | Top-level | Footer, contact page, visit section |
| `business.googleMapsUrl` | Top-level | "Get Directions" links |
| `business.mapEmbedUrl` | Top-level | Embedded Google Maps iframe |
| `business.hours` | Top-level | Footer, contact page, visit section |
| `metadata.*` | Per-page | SEO title, description, keywords |
| `hero.*` | Homepage | Tagline, heading, description, trust badge |
| `doctor.*` | Homepage + About | Doctor name, degree, bio, photo |
| `testimonials` | Homepage | Patient reviews |
| `faqs` | Homepage | FAQ accordion |
| `email.*` | Server-side | Notification email branding + recipient |
| `aboutPage.*` | About page | Story, philosophy pillars, first visit steps |
| `servicesPreview` / `fullServices` | Homepage + Services | Service cards and detail pages |

### Client Images

Images currently live in `public/images/`. For future clients, create `public/images/[client-slug]/` folders and update the image paths in the preset file. All image fields in the config accept standard `/images/...` paths.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
