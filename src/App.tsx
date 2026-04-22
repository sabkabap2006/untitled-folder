import VelorahHero from './components/VelorahHero';
import AboutSection from './components/AboutSection';
import ProjectShowcase from './components/ProjectShowcase';
import AcademicsSection from './components/AcademicsSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <main className="w-full bg-background min-h-screen selection:bg-white/20 selection:text-white antialiased scroll-smooth">
      {/* 1. Cinematic Hero Section - Velorah */}
      <VelorahHero />
      
      {/* 2. Portfolio Summary & Skills */}
      <AboutSection />
      
      <div className="h-[2px] bg-white/5" />
      
      {/* 3. Project Showcase */}
      <ProjectShowcase />
      
      <div className="h-[2px] bg-white/5" />
      
      {/* 4. Academics & Achievements */}
      <AcademicsSection />
      
      {/* 5. Contact & Socials */}
      <ContactFooter />
    </main>
  );
}
