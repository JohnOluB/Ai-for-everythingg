import { cn } from "@/lib/utils";

interface QuoteSectionProps {
  quote: string;
  attribution: string;
  isFinalQuote?: boolean;
  className?: string;
}

const QuoteSection = ({ quote, attribution, isFinalQuote = false, className }: QuoteSectionProps) => {
  if (isFinalQuote) {
    return (
      <section className={cn("py-20 lg:py-32", className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative max-w-4xl mx-auto">
            <h2 
              className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            >
              "{quote}"
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              - {attribution}
            </p>
            <div className="absolute -top-1/4 -bottom-1/4 -left-1/4 -right-1/4 bg-primary/5 opacity-50 rounded-full filter blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn(className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <blockquote className="max-w-4xl mx-auto text-center border-l-4 border-primary p-4 md:p-8 bg-background/50 rounded-r-xl">
          <p className="font-headline text-xl md:text-2xl font-semibold italic text-foreground">
            "{quote}"
          </p>
          <footer className="mt-4 text-md text-muted-foreground">
            - {attribution}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
