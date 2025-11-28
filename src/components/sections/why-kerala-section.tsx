import { Globe, Users, BookOpenCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const keyPoints = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Global Model",
    description: "Positioning Kerala as a worldwide example in equitable, grassroots-first AI education.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Creators, Not Consumers",
    description: "Enabling a new generation of innovators to build solutions for local and global challenges.",
  },
  {
    icon: <BookOpenCheck className="w-8 h-8 text-primary" />,
    title: "Knowledge as Public Good",
    description: "Making AI education and tools accessible to all, ensuring no one is left behind.",
  },
];

const WhyKeralaSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
              Why Kerala?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Building on Kerala's pioneering legacy in digital literacy, we're creating a global model for responsible AI education that's equitable, grassroots-first, and multilingual.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {keyPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                <div className="p-3 bg-primary/10 text-primary rounded-lg mt-1">
                    {point.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-headline">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKeralaSection;
