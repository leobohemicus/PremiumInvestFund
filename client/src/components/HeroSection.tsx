import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import AnimatedCounter from "./AnimatedCounter";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-card/50 to-background">
      <AnimatedBackground />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background/80 via-background/90 to-background" />
      
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `radial-gradient(ellipse at top, hsl(var(--primary) / 0.15) 0%, transparent 50%)`
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Award className="h-4 w-4 text-primary" />
              <p className="text-sm font-semibold text-primary">
                Pro kvalifikované investory | Min. 1M Kč
              </p>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-tight leading-[1.1]">
              Bankovní sazby <span className="text-primary font-medium">klesají</span>
            </h1>

            <h2 className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed font-light">
              <strong className="font-semibold">Zafixujte si&nbsp;atraktivní výnosy na&nbsp;desetiletí dopředu.</strong>
              <br />
              Fond kvalifikovaných investorů s přístupem k dlouhodobým dluhopisům na úrovních, které zde nebyly 20 let. Výnos 6,5–15% p.a.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group"
                data-testid="button-hero-cta"
              >
                Kontaktovat správce
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("strategie");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-hero-learn-more"
              >
                Zjistit více
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-primary/20">
              <div className="group flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <p className="text-2xl md:text-3xl font-bold tabular-nums text-primary">
                    <AnimatedCounter value={6.5} decimals={1} />–<AnimatedCounter value={15} />%
                  </p>
                </div>
                <p className="text-xs font-medium text-muted-foreground">Očekávaný výnos p.a.</p>
              </div>
              <div className="group flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <p className="text-2xl md:text-3xl font-bold tabular-nums text-primary">
                    <AnimatedCounter value={14.1} decimals={1} />
                  </p>
                </div>
                <p className="text-xs font-medium text-muted-foreground">Průměrná durace</p>
              </div>
              <div className="group flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <p className="text-2xl md:text-3xl font-bold tabular-nums text-primary">
                    <AnimatedCounter value={65} />
                  </p>
                </div>
                <p className="text-xs font-medium text-muted-foreground">Investorů ve fondu</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card/60 backdrop-blur-md border-2 border-primary/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center pb-5 border-b-2 border-primary/10">
                    <h4 className="text-lg font-semibold mb-2">Potenciální výnos</h4>
                    <p className="text-xs text-muted-foreground">Projekce investice 1M Kč</p>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="bg-muted/30 rounded-2xl p-5 border border-primary/10">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">Konzervativní scénář</span>
                        <span className="text-xs text-muted-foreground">6,5% p.a.</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">1,88M Kč</span>
                        <span className="text-sm text-muted-foreground">za 10 let</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">+880 000 Kč zisk</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-5 border-2 border-primary/30">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-sm font-medium">Optimistický scénář</span>
                        <span className="text-xs text-muted-foreground">15% p.a.</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">4,05M Kč</span>
                        <span className="text-sm text-muted-foreground">za 10 let</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">+3 050 000 Kč zisk</p>
                    </div>
                  </div>

                  <div className="pt-5 border-t-2 border-primary/10 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Minimální investice</span>
                      <span className="font-bold">1M Kč</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Investiční horizont</span>
                      <span className="font-bold">3+ roky</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
