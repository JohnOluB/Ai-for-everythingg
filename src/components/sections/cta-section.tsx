import Link from "next/link";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="cta" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto text-center rounded-3xl overflow-hidden p-8 md:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/20 to-accent/30 -z-10"></div>
          <div className="absolute inset-0 bg-background/70 backdrop-blur-lg -z-10"></div>
          
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Join the Movement
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            Be part of Kerala's journey to become a global leader in responsible AI education. Every individual becomes both a learner and a teacher.
          </p>
          <Button asChild size="lg" className="shimmer-button text-lg font-bold py-8 px-10 transition-transform duration-300 hover:scale-105">
            <Link href="#">Start Learning Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
