/**
 * Service suspension switch.
 *
 * true  → every visitor sees the "temporarily suspended" notice instead of the site.
 * false → the original site is restored exactly as it was (App.tsx was never modified).
 *
 * To restore after payment: set this to false, build and deploy.
 */
export const SITE_SUSPENDED = true;
