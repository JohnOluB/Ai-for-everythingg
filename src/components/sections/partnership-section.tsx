import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BrainCircuit, DollarSign, Megaphone, Gift, Home, Handshake, BookUser, Wrench, MessageSquareHeart, DoorOpen } from "lucide-react";

const partnerTypes = [
  {
    value: "knowledge",
    title: "Knowledge Partners",
    subtitle: "You have expertise to share",
    icon: <BrainCircuit className="w-6 h-6" />,
    content: [
      { title: "Tech & Industry", description: "AI companies contributing technical know-how, mentorship, and product demos." },
      { title: "Education & Content", description: "Educators designing curriculum, leading workshops, and creating learning materials." },
    ]
  },
  {
    value: "financial",
    title: "Financial Partners",
    subtitle: "You provide funding",
    icon: <DollarSign className="w-6 h-6" />,
    content: [
      { title: "Program Funding", description: "Sponsor facilitator training, venue costs, operations, and scaling to new districts." },
      { title: "Resource Funding", description: "Support for learning materials, hardware, printed resources, and kit distribution." },
    ]
  },
  {
    value: "media",
    title: "Media & Outreach",
    subtitle: "You amplify our reach",
    icon: <Megaphone className="w-6 h-6" />,
    content: [
      { title: "Traditional & Digital Media", description: "Newspapers, TV, radio, and social media partnerships." },
      { title: "Content & Stories", description: "Creating videos, articles, podcasts, and local language content to spread the word." },
    ]
  },
  {
    value: "resource",
    title: "Resource Partners",
    subtitle: "You provide tools",
    icon: <Gift className="w-6 h-6" />,
    content: [
      { title: "Hardware & Software", description: "Laptops, tablets, demo devices, and free/discounted AI tools." },
      { title: "Materials & Support", description: "Learning resources, books, course licenses, and technical maintenance." },
    ]
  },
  {
    value: "community",
    title: "Community Partners",
    subtitle: "You host on the ground",
    icon: <Home className="w-6 h-6" />,
    content: [
      { title: "Institutions", description: "Schools, libraries, NGOs, Kudumbashree, and workplaces providing space." },
      { title: "Individual Hosts", description: "Anyone organizing learning circles or mentoring others in their community." },
    ]
  },
];

const partnershipActions = [
    { icon: BookUser, text: "Host Learning Programs" },
    { icon: Handshake, text: "Volunteer & Mentor" },
    { icon: Wrench, text: "Sponsor Toolkits" },
    { icon: MessageSquareHeart, text: "Contribute Challenges" },
    { icon: DoorOpen, text: "Open Doors" },
];

const PartnershipSection = () => {
  return (
    <section id="partner" className="py-20 lg:py-32 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Partner With Us</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            AI for Everyone is designed to be collaborative and inclusive. TinkerHub acts as the enabler, holding space for partners and communities to lead, learn, and build together.
          </p>
        </div>

        <Tabs defaultValue="knowledge" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto p-2">
            {partnerTypes.map(pt => (
              <TabsTrigger key={pt.value} value={pt.value} className="flex-col sm:flex-row h-auto py-3 gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                {pt.icon}
                <span>{pt.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {partnerTypes.map(pt => (
            <TabsContent key={pt.value} value={pt.value} className="mt-8">
                <div className="glassmorphic-card p-8">
                    <h3 className="font-headline text-2xl font-bold mb-2">{pt.title}</h3>
                    <p className="text-muted-foreground mb-6">{pt.subtitle}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pt.content.map(item => (
                            <div key={item.title} className="p-4 bg-background/50 rounded-lg">
                                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-20 text-center">
            <h3 className="font-headline text-2xl font-bold mb-8">How You Can Partner With Us</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {partnershipActions.map(action => (
                    <div key={action.text} className="glassmorphic-card p-4 flex flex-col items-center justify-center gap-3 text-center aspect-square">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            {action.icon && <action.icon className="w-7 h-7" />}
                        </div>
                        <span className="font-semibold text-sm">{action.text}</span>
                    </div>
                ))}
            </div>
            <Button asChild size="lg" className="mt-12 shimmer-button">
                <Link href="#">Become a Partner</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
