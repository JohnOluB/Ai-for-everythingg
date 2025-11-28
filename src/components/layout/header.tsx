"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Why Kerala" },
  { href: "#who-we-serve", label: "Who We Serve" },
  { href: "#approach", label: "Our Approach" },
  { href: "#why-now", label: "Why Now" },
  { href: "#partner", label: "Partners" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center gap-2 font-headline text-xl font-bold text-primary">
            <Bot className="h-7 w-7" />
            <span className="text-foreground">AI for Everyone</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:flex shimmer-button">
              <Link href="#cta">Get Started</Link>
            </Button>

            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu" className="hover:bg-transparent focus-visible:bg-transparent">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background/90 backdrop-blur-xl border-border w-[80vw]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-border">
                        <Link href="#home" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 font-headline text-lg font-bold text-primary">
                            <Bot className="h-6 w-6" />
                            <span className="text-foreground">AI for Everyone</span>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                            <X />
                        </Button>
                    </div>
                    <nav className="flex-1 flex flex-col items-center justify-center gap-6">
                      {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                          <span className="text-2xl font-medium text-foreground hover:text-primary transition-colors">
                            {link.label}
                          </span>
                        </Link>
                      ))}
                    </nav>
                    <div className="p-4 border-t border-border">
                      <Button asChild className="w-full shimmer-button" onClick={() => setIsMobileMenuOpen(false)}>
                        <Link href="#cta">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
