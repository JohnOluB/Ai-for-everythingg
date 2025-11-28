import { TrendingUp, Briefcase, ShieldAlert, Siren } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const challenges = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Skills Gap",
    description: "Students graduate without understanding technologies defining their careers.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Workforce Impact",
    description: "AI automation is rapidly changing traditional roles and demanding new skills.",
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    title: "Misinformation",
    description: "Deepfakes and AI-generated content blur truth and erode trust.",
  },
];

const ChallengesSection = () => {
  return (
    <section id="why-now" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Why AI Literacy Now?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The future is arriving faster than we think. Understanding AI is no longer optional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="glassmorphic-card p-6 text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                      {challenge.icon}
                  </div>
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl p-8 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-amber-500/5 backdrop-blur-md">
                 <div className="absolute -top-5 -left-5 p-3 bg-amber-500 text-background rounded-full shadow-lg shadow-amber-500/20">
                    <Siren className="w-8 h-8" />
                 </div>
                <h3 className="font-headline text-xl font-bold mb-3 text-amber-300">
                    Protecting Our Communities
                </h3>
                <p className="text-amber-200/80">
                    From deepfakes to misinformation, AI literacy gives our communities awareness. We have a special focus on protecting elders and vulnerable populations from sophisticated scams.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
