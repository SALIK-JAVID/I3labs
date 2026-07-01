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
      <main>
        {/* Hero — includes its own fixed navbar */}
        <Hero />

        <About />
        <Services />
        <Activities />
        <Benefits />
        <ThreeIPP />
        <Curriculum />
        <STEMKits />
        <Implementation />
        <WhyPartner />
        <Readiness />
        <Engagement />
        <Clients />
        <Outreach />
        <Team />
        <Mentors />
        <Contact />
      </main>
    </div>
  );
}

export default App;
