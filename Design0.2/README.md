# i3 Labs — Design 0.2

STEM education website for i3 Labs, built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Framer Motion** and **Three.js** (React Three Fiber).

Visual direction: palette and type system from sitesyncai.com, layout cues from axisgroup.xyz and the robotics references in [`inspiration/`](inspiration/).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
npm run lint
```

## Pages

| Route | What's there |
| --- | --- |
| `/` | Robotic-hand video hero, client marquee, pillars, tabbed highlights, programs, 3IPP scroll timeline, horizontal-scroll curriculum, audiences, LMS dashboard, FAQ, CTA |
| `/programs` | All programs + curriculum stages |
| `/programs/[slug]` | 6 statically generated program pages (outcomes, modules, tools) |
| `/labs` | Services, 30-day setup timeline, engagement packages, FAQ |
| `/innovation` | 3D atom hero + sticky stacking cards for the 5 3IPP stages |
| `/shop` | Store: 32 products with photos, search, filters, quick view, cart and WhatsApp ordering |
| `/about` | Stats, mission/vision, team, partner institutions |
| `/contact` | Validated form → `POST /api/contact`, contact channels, map |
| `/api/contact` | Server-side validation (shared schema in `src/lib/contact.ts`) |

Also: `not-found`, `sitemap.xml`, `robots.txt`, SVG favicon.

## Structure

```
src/
├─ app/                     routes, layout, template (page transitions), API
├─ components/
│  ├─ layout/               Navbar, Footer, NewsletterForm, ScrollProgress, Providers
│  ├─ three/                RobotArmScene, AtomScene, Scene (lazy + pauses off-screen)
│  ├─ ui/                   Reveal/Stagger, SplitText, Counter, Magnetic, Button,
│  │                        TiltCard, ImageReveal, Accordion, Marquee, Logo, SectionHeading
│  └─ sections/
│     ├─ home/              one file per home section
│     └─ shared/            PageHero, CTABand, ProgramCard, Pricing, SetupSteps,
│                           StackCards, ContactForm
└─ lib/                     data.ts (all content), site.ts, contact.ts, utils.ts
```

**Editing content:** almost all copy lives in `src/lib/data.ts` and `src/lib/site.ts`.
**Design tokens:** `src/app/globals.css` (`@theme` block).

## Notes

- **Hero video:** `public/video/robotic-hand.mp4` is a square crop with a seamless ping-pong loop, about 370 KB. Its backdrop is graded to pure white, so `mix-blend-multiply` lets the paper and grid show through. Keep its wrapper free of transform, opacity or filter, or the blend breaks.
- The Three.js atom on `/innovation` is code-split (`next/dynamic`, `ssr: false`), renders only while on screen, and respects `prefers-reduced-motion`.
- **Imagery:** the site uses only `public/images/robot-gripper.jpg` and `public/images/robotic-actuator.jpg`, alternated across cards. To use different photos, change the `image` paths in `src/lib/data.ts`, `Highlights.tsx`, `StackCards.tsx` and `about/page.tsx`.
- **Store (`/shop`):** this is front-end only, with no backend. Products, categories and the WhatsApp message templates are in `src/lib/shop.ts`. Add `price: 499` to a product to show its price, and change `image` to use your own photo from `public/images/shop/`. Product photos are from Wikimedia Commons under CC licences and are credited on the page; keep the credits while using them. The WhatsApp number is `site.whatsapp` in `src/lib/site.ts`. The UI lives in `src/components/shop/`: the provider (cart state, saved in the browser), the catalogue, the quick-view window, the cart drawer and the floating buttons.
- The contact API validates and logs submissions. To deliver them, wire up email or a CRM in `src/app/api/contact/route.ts`.
- The newsletter form validates client-side only. Connect it to your mailing provider.
