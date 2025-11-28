import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BrainCircuit, DollarSign, Megaphone, Gift, Home, Handshake, BookUser, Wrench, MessageSquareHeart, DoorOpen } from "lucide-react";
import { PartnerCard } from "../ui/partner-card";

const partnerTypes = [
  {
    value: "knowledge",
    title: "Knowledge Partners",
    subtitle: "You have expertise to share",
    icon: BrainCircuit,
    gradient: "from-blue-500/20 to-cyan-500/20",
    content: [
      { title: "Tech & Industry", description: "AI companies contributing technical know-how, mentorship, and product demos." },
      { title: "Education & Content", description: "Educators designing curriculum, leading workshops, and creating learning materials." },
    ]
  },
  {
    value: "financial",
    title: "Financial Partners",
    subtitle: "You provide funding",
    icon: DollarSign,
    gradient: "from-emerald-500/20 to-green-500/20",
    content: [
      { title: "Program Funding", description: "Sponsor facilitator training, venue costs, operations, and scaling to new districts." },
      { title: "Resource Funding", description: "Support for learning materials, hardware, printed resources, and kit distribution." },
    ]
  },
  {
    value: "media",
    title: "Media & Outreach",
    subtitle: "You amplify our reach",
    icon: Megaphone,
    gradient: "from-purple-500/20 to-pink-500/20",
    content: [
      { title: "Traditional & Digital Media", description: "Newspapers, TV, radio, and social media partnerships." },
      { title: "Content & Stories", description: "Creating videos, articles, podcasts, and local language content to spread the word." },
    ]
  },
  {
    value: "resource",
    title: "Resource Partners",
    subtitle: "You provide tools",
    icon: Gift,
    gradient: "from-amber-500/20 to-orange-500/20",
    content: [
      { title: "Hardware & Software", description: "Laptops, tablets, demo devices, and free/discounted AI tools." },
      { title: "Materials & Support", description: "Learning resources, books, course licenses, and technical maintenance." },
    ]
  },
  {
    value: "community",
    title: "Community Partners",
    subtitle: "You host on the ground",
    icon: Home,
    gradient: "from-rose-500/20 to-red-500/20",
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
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Partner With Us</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            AI for Everyone is designed to be collaborative and inclusive. TinkerHub acts as the enabler, holding space for partners and communities to lead, learn, and build together.
          </p>
        </div>

        <Tabs defaultValue="knowledge" className="w-full animate-fade-in-up animation-delay-300">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto p-2 bg-background/60 backdrop-blur-sm">
            {partnerTypes.map(pt => (
              <TabsTrigger key={pt.value} value={pt.value} className="flex-col sm:flex-row h-auto py-3 gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-lg transition-all duration-300">
                <pt.icon className="w-5 h-5" />
                <span>{pt.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="mt-8 relative">
            {partnerTypes.map(pt => (
                <TabsContent key={pt.value} value={pt.value} className="mt-0 -mx-4">
                     <PartnerCard {...pt} />
                </TabsContent>
            ))}
          </div>
        </Tabs>

        <div className="mt-24 text-center animate-fade-in-up animation-delay-500">
            <h3 className="font-headline text-2xl font-bold mb-8">How You Can Partner With Us</h3>
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {partnershipActions.map((action, index) => (
                    <div key={action.text} className="glassmorphic-card p-4 flex flex-col items-center justify-center gap-3 text-center aspect-square group animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                        <div className="p-4 bg-primary/10 rounded-full text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                            <action.icon className="w-8 h-8" />
                        </div>
                        <span className="font-semibold text-sm mt-2">{action.text}</span>
                    </div>
                ))}
            </div>
            <Button asChild size="lg" className="mt-16 shimmer-button">
                <Link href="#">Become a Partner</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
