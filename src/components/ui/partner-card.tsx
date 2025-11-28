import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";

interface PartnerCardProps {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    content: { title: string; description: string }[];
    gradient: string;
}

export function PartnerCard({ icon: Icon, title, subtitle, content, gradient }: PartnerCardProps) {
    return (
        <Card className={cn(
            "glassmorphic-card border-border/30 overflow-hidden transition-all duration-500",
            "bg-gradient-to-br",
            gradient
            )}>
            <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-x-6 gap-y-4 mb-8">
                    <div className="p-4 bg-background/70 rounded-xl self-start">
                        <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-2xl font-bold">
                            {title}
                        </h3>
                        <p className="text-muted-foreground">{subtitle}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-[6.5rem]">
                    {content.map((item, index) => (
                        <div key={item.title} className="p-4 bg-background/50 rounded-lg animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                            <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
