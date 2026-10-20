import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { Pillars } from "@/components/sections/home/Pillars";
import { Highlights } from "@/components/sections/home/Highlights";
import { ProgramsGrid } from "@/components/sections/home/ProgramsGrid";
import { ProcessTimeline } from "@/components/sections/home/ProcessTimeline";
import { CurriculumScroll } from "@/components/sections/home/CurriculumScroll";
import { Audiences } from "@/components/sections/home/Audiences";
import { Platform } from "@/components/sections/home/Platform";
import { FAQ } from "@/components/sections/home/FAQ";
import { CTABand } from "@/components/sections/shared/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Pillars />
      <Highlights />
      <ProgramsGrid />
      <ProcessTimeline />
      <CurriculumScroll />
      <Audiences />
      <Platform />
      <FAQ />
      <CTABand />
    </>
  );
}
