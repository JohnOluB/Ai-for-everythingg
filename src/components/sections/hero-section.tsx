import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CircleCheckBig, Users, BarChart } from "lucide-react";

const stats = [
    {
        value: "1L+",
        label: "Target Learners",
        icon: <Users className="w-5 h-5 text-accent" />
    },
    {
        value: "100%",
        label: "Community Focus",
        icon: <CircleCheckBig className="w-5 h-5 text-accent" />
    },
    {
        value: "3",
        label: "Learning Pillars",
        icon: <BarChart className="w-5 h-5 text-accent" />
    }
];

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <Badge variant="outline" className="mb-6 py-2 px-4 rounded-full border-primary/50 text-primary text-sm backdrop-blur-sm bg-primary/10">
                    Powered by TinkerHub
                </Badge>
                
                <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                    <span className="block">AI for Everyone</span>
                    <span className="block text-primary">Making Kerala AI-Ready</span>
                </h1>
                
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                    A statewide initiative to democratize AI knowledge, transforming communities from consumers to creators in the AI era.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button asChild size="lg" className="shimmer-button text-lg transition-transform duration-300 hover:scale-105">
                        <Link href="#cta">
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg bg-background/50 backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:bg-primary/10">
                        <Link href="#about">Learn More</Link>
                    </Button>
                </div>
                
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden border border-border/50 bg-border/50 backdrop-blur-sm">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-6 bg-background/80 flex flex-col items-center justify-center gap-2">
                                <div className="flex items-center gap-2">
                                    {stat.icon}
                                    <span className="font-headline text-3xl font-bold text-primary">{stat.value}</span>
                                </div>
                                <span className="text-muted-foreground">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
