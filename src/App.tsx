
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Activities } from './sections/Activities';
import { Benefits } from './sections/Benefits';
import { ThreeIPP } from './sections/ThreeIPP';
import { Curriculum } from './sections/Curriculum';
import { STEMKits } from './sections/STEMKits';
import { Implementation } from './sections/Implementation';
import { WhyPartner } from './sections/WhyPartner';
import { Readiness } from './sections/Readiness';
import { Engagement } from './sections/Engagement';
import { Clients } from './sections/Clients';
import { Outreach } from './sections/Outreach';
import { Team } from './sections/Team';
import { Mentors } from './sections/Mentors';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="bg-brand-darkBg text-slate-200 min-h-screen">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* 2. Page Sections */}
      <main>
        {/* Hero Banner */}
        <Hero />

        {/* Company Description */}
        <About />

        {/* Core Services */}
        <Services />

        {/* Specific Activities */}
        <Activities />

        {/* Quadrant Benefits */}
        <Benefits />

        {/* Proprietary 3IPP Framework */}
        <ThreeIPP />

        {/* Curriculums */}
        <Curriculum />

        {/* STEM Kits */}
        <STEMKits />

        {/* Implementation roadmap */}
        <Implementation />

        {/* Why Partner */}
        <WhyPartner />

        {/* Readiness Checklist */}
        <Readiness />

        {/* Engagement models comparison */}
        <Engagement />

        {/* Client Marquees */}
        <Clients />

        {/* Outreach event gallery */}
        <Outreach />

        {/* Tech team */}
        <Team />

        {/* Advisory mentors */}
        <Mentors />

        {/* Contact Form & Footer branding */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
