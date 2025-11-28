import { Sparkles, Rocket, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const learnerGroups = [
  {
    age: "Ages 10-17",
    icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
    title: "KuttyMakers",
    what: "Develop curiosity and familiarity with foundational AI concepts.",
    why: "Children are already immersed in AI. Without proper exposure, they risk becoming mere consumers rather than creators or critical thinkers.",
    how: "Through pattern recognition games, sorting exercises, AI storybooks, and hands-on experiments using tools like Teachable Machine and Scratch.",
    color: "cyan",
  },
  {
    age: "College Students & Early Professionals",
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: "Young Makers",
    what: "Problem-solving across disciplines, understanding AI's fairness and limitations.",
    why: "To guide students into becoming innovators, decision-makers, and creators of AI-driven solutions.",
    how: "Study jams, hackathons, and mentoring. Develop applications with Gen AI and LLMs while contributing to Kerala-specific AI models.",
    color: "purple",
  },
  {
    age: "Educators, Professionals, Parents, Elderly",
    icon: <Shield className="w-8 h-8 text-orange-400" />,
    title: "Friends of the Movement",
    what: "Gain understanding of AI's impact and learn to identify misinformation, deepfakes, and threats.",
    why: "Understanding AI's multifaceted nature is crucial for developing appropriate policies and fostering societal adoption.",
    how: "Learning circles in workplaces, public discussions, bringing together diverse professionals to explore AI's transformation of their fields.",
    color: "orange",
  },
];

const colorClasses = {
    cyan: "hover:border-cyan-400/50 hover:shadow-cyan-400/10",
    purple: "hover:border-purple-400/50 hover:shadow-purple-400/10",
    orange: "hover:border-orange-400/50 hover:shadow-orange-400/10",
}

const LearnerSegmentsSection = () => {
  return (
    <section id="who-we-serve" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Who We Serve
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            AI literacy is for everyone, at every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learnerGroups.map((group) => (
            <div key={group.title} className={`glassmorphic-card p-6 flex flex-col ${colorClasses[group.color as keyof typeof colorClasses]}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-background rounded-full">
                    {group.icon}
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">{group.age}</Badge>
              </div>
              
              <h3 className="font-headline text-2xl font-bold mb-3">{group.title}</h3>
              
              <div className="space-y-4 text-muted-foreground flex-grow">
                  <p><strong className="text-foreground/80">What:</strong> {group.what}</p>
                  <p><strong className="text-foreground/80">Why:</strong> {group.why}</p>
                  <p><strong className="text-foreground/80">How:</strong> {group.how}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnerSegmentsSection;
