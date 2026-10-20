import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="hairline-grid relative grid min-h-[80dvh] place-items-center pt-24">
      <div className="container-site text-center">
        <p className="eyebrow">Error 404 · Signal lost</p>
        <h1 className="mt-6 font-display text-[clamp(5rem,18vw,12rem)] font-bold leading-none tracking-tight">
          4<span className="text-or">0</span>4
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-2">
          This experiment didn&apos;t go as planned. The page you&apos;re looking for has moved or never existed.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/programs" variant="outline">Explore programs</Button>
        </div>
      </div>
    </section>
  );
}
