import { Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background/50 border-t border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} AI for Everyone - A TinkerHub Initiative. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
