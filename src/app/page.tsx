import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import WhyKeralaSection from '@/components/sections/why-kerala-section';
import LearnerSegmentsSection from '@/components/sections/learner-segments-section';
import ThreePillarsSection from '@/components/sections/three-pillars-section';
import ChallengesSection from '@/components/sections/challenges-section';
import PartnershipSection from '@/components/sections/partnership-section';
import CtaSection from '@/components/sections/cta-section';
import QuoteSection from '@/components/sections/quote-section';
import ScrollToTopButton from '@/components/ui/scroll-to-top';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-clip">
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <div className="absolute top-0 -left-1/4 w-[50vw] h-[50vw] bg-primary/10 rounded-full filter blur-[150px] animate-blob opacity-50"></div>
        <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/10 rounded-full filter blur-[150px] animate-blob animation-delay-2000 opacity-50"></div>
        <div className="absolute bottom-0 left-1/4 w-[50vw] h-[50vw] bg-purple-500/10 rounded-full filter blur-[120px] animate-blob animation-delay-4000 opacity-50"></div>
      </div>
      
      <Header />
      <main className="relative z-10">
        <HeroSection />

        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <QuoteSection 
            quote="We have a historical opportunity and responsibility to establish a human-centred framework for AI research, education, practice and policy."
            attribution="Fei-Fei Li, Stanford University & Co-Founder of AI4ALL"
            className="py-16 md:py-24"
          />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <WhyKeralaSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <LearnerSegmentsSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <ThreePillarsSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <ChallengesSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <PartnershipSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <CtaSection />
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <QuoteSection 
            quote="AI will shape the future of work, culture, and communities. Kerala can either be a consumer or a creator. With your partnership, we can ensure every Keralite learns, builds, and creates responsibly with AI. This is our chance to set a global model again, like we did with digital literacy."
            attribution="AI for Everyone Team"
            isFinalQuote={true}
            className="py-16 md:py-24"
          />
        </div>

      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
