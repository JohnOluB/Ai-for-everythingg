import { BrainCircuit, Wrench, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-white/90" />,
    title: "Head",
    subtitle: "Understand",
    description: "Grasp how AI works and why it matters in your daily life. Build foundational knowledge that empowers decision-making.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Wrench className="w-10 h-10 text-white/90" />,
    title: "Hand",
    subtitle: "Build",
    description: "Create with AI tools, develop projects, and solve problems that matter to your local community.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Heart className="w-10 h-10 text-white/90" />,
    title: "Heart",
    subtitle: "Create",
    description: "Share knowledge, mentor others, and shape a more inclusive AI future for Kerala and beyond.",
    gradient: "from-orange-500 to-red-500",
  },
];

const ThreePillarsSection = () => {
  return (
    <section id="approach" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Our Learning Approach
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            True learning engages the head, hand, and heart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`relative rounded-2xl p-8 flex flex-col items-center text-center text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${pillar.gradient}`}
            >
              <div className="mb-6">{pillar.icon}</div>
              <h3 className="font-headline text-4xl font-bold">{pillar.title}</h3>
              <p className="text-lg font-semibold mb-4 opacity-80">{pillar.subtitle}</p>
              <p className="opacity-90 flex-grow">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;
