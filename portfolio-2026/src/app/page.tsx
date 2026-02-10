import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { PageLoader } from '@/components/PageLoader';

export default function Home() {
  return (
    <div className="relative">
      <PageLoader />
      <Navigation />

      {/* Decorative Left Edge */}
      <div className="fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-primary/30 to-transparent hidden lg:block z-40"></div>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
