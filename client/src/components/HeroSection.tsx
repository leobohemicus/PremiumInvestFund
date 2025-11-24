import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Award, Coins } from "lucide-react";
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
            <div className="hidden md:inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
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

            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="group flex flex-col items-center text-center bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl lg:rounded-2xl p-4 lg:p-6 hover-elevate transition-all">
                <div className="flex items-center gap-1.5 lg:gap-2 mb-1 lg:mb-2">
                  <TrendingUp className="h-4 w-4 lg:h-6 lg:w-6 text-primary transition-transform group-hover:scale-110" />
                  <p className="text-xl lg:text-3xl xl:text-4xl font-bold tabular-nums text-primary">
                    <AnimatedCounter value={6.5} decimals={1} />–<AnimatedCounter value={15} />%
                  </p>
                </div>
                <p className="text-xs lg:text-sm font-medium text-muted-foreground">Očekávaný výnos p.a.</p>
              </div>
              
              <div className="group flex flex-col items-center text-center bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl lg:rounded-2xl p-4 lg:p-6 hover-elevate transition-all">
                <div className="flex items-center gap-1.5 lg:gap-2 mb-1 lg:mb-2">
                  <Shield className="h-4 w-4 lg:h-6 lg:w-6 text-primary transition-transform group-hover:scale-110" />
                  <p className="text-xl lg:text-3xl xl:text-4xl font-bold tabular-nums text-primary">
                    <AnimatedCounter value={14.1} decimals={1} />
                  </p>
                </div>
                <p className="text-xs lg:text-sm font-medium text-muted-foreground">Průměrná durace</p>
              </div>
              
              <div className="group flex flex-col items-center text-center bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl lg:rounded-2xl p-4 lg:p-6 hover-elevate transition-all">
                <div className="flex items-center gap-1.5 lg:gap-2 mb-1 lg:mb-2">
                  <Award className="h-4 w-4 lg:h-6 lg:w-6 text-primary transition-transform group-hover:scale-110" />
                  <p className="text-xl lg:text-3xl xl:text-4xl font-bold tabular-nums text-primary">
                    <AnimatedCounter value={65} />
                  </p>
                </div>
                <p className="text-xs lg:text-sm font-medium text-muted-foreground">Investorů ve fondu</p>
              </div>
              
              <div className="group flex flex-col items-center text-center bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl lg:rounded-2xl p-4 lg:p-6 hover-elevate transition-all">
                <div className="flex items-center gap-1.5 lg:gap-2 mb-1 lg:mb-2">
                  <Coins className="h-4 w-4 lg:h-6 lg:w-6 text-primary transition-transform group-hover:scale-110" />
                  <p className="text-xl lg:text-3xl xl:text-4xl font-bold tabular-nums text-primary">
                    1M Kč
                  </p>
                </div>
                <p className="text-xs lg:text-sm font-medium text-muted-foreground">Minimální investice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
