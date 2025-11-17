import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Premium_Prague_cityscape_hero_ed9f252b.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.6) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-md bg-background/10 backdrop-blur-sm border border-white/20">
            <p className="text-sm font-medium text-white/90">
              Pro kvalifikované investory | Min. 1M Kč
            </p>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            Dlouhodobý růst s&nbsp;vysokou likviditou
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Fond kvalifikovaných investorů zaměřený na veřejně obchodovatelné
            dluhopisy s transparentním portfoliem a očekávaným výnosem 7% p.a.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white/95 hover:bg-white text-foreground backdrop-blur-sm border border-white/20"
              data-testid="button-hero-cta"
            >
              Kontaktovat správce
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("strategie");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-background/10 hover:bg-background/20 text-white border-white/30 backdrop-blur-sm"
              data-testid="button-hero-learn-more"
            >
              Zjistit více
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
