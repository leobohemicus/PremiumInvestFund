import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { TrendingDown, TrendingUp } from "lucide-react";

export default function BondSensitivitySlider() {
  const [rateChange, setRateChange] = useState(0);
  
  // Fond má státní dluhopisy s durací 15+ let
  const duration = 15;
  const currentYield = 7;
  
  // Výpočet změny ceny podle durace
  const priceChange = -duration * rateChange;
  const totalReturn = currentYield + priceChange;

  const formatPercent = (value: number) => {
    const sign = value > 0 ? "+" : "";
    return `${sign}${value.toFixed(1)}%`;
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Interaktivní kalkulačka
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
            Citlivost ceny dluhopisů
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zjistěte, jak změna úrokových sazeb ovlivní hodnotu portfolia s dlouhými dluhopisy
          </p>
        </div>

        <Card className="p-8 md:p-12 border-2">
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Změna dlouhodobých úrokových sazeb
              </p>
              <div className="flex items-center justify-center gap-3 mb-6">
                <TrendingDown className={`h-6 w-6 ${rateChange < 0 ? 'text-primary' : 'text-muted-foreground/30'}`} />
                <div className="font-bold text-4xl md:text-6xl tabular-nums">
                  {formatPercent(rateChange)}
                </div>
                <TrendingUp className={`h-6 w-6 ${rateChange > 0 ? 'text-destructive' : 'text-muted-foreground/30'}`} />
              </div>
              
              <div className="px-4 md:px-12">
                <Slider
                  value={[rateChange]}
                  onValueChange={(values) => setRateChange(values[0])}
                  min={-4}
                  max={2}
                  step={0.1}
                  className="cursor-pointer"
                  data-testid="slider-rate-change"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>-4%</span>
                  <span>0%</span>
                  <span>+2%</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="text-center p-6 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-2">Bazický výnos</p>
                <p className="text-2xl font-bold text-foreground tabular-nums">
                  {formatPercent(currentYield)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">p.a.</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-2">Změna ceny dluhopisů</p>
                <p className={`text-2xl font-bold tabular-nums ${priceChange > 0 ? 'text-primary' : priceChange < 0 ? 'text-destructive' : 'text-foreground'}`}>
                  {formatPercent(priceChange)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">kapitálový zisk/ztráta</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-primary/10 border-2 border-primary/20">
                <p className="text-sm font-semibold text-primary mb-2">Celkový výnos</p>
                <p className={`text-3xl font-bold tabular-nums ${totalReturn > currentYield ? 'text-primary' : totalReturn < 0 ? 'text-destructive' : 'text-foreground'}`}>
                  {formatPercent(totalReturn)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">za rok</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-primary rounded-full" />
                  Jak to funguje?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tento model ilustruje citlivost dlouhodobých státních dluhopisů (durace {duration} let), které tvoří jádro portfolia. 
                  {rateChange < 0 ? (
                    <> Při <strong className="text-foreground">poklesu</strong> úrokových sazeb o {formatPercent(Math.abs(rateChange))} 
                    roste tržní cena existujících dluhopisů, což přináší kapitálový zisk {formatPercent(priceChange)}. 
                    Celkový výnos tak dosahuje <strong className="text-primary">{formatPercent(totalReturn)}</strong>.</>
                  ) : rateChange > 0 ? (
                    <> Při <strong className="text-foreground">růstu</strong> úrokových sazeb o {formatPercent(rateChange)} 
                    klesá tržní cena existujících dluhopisů, což znamená kapitálovou ztrátu {formatPercent(priceChange)}. 
                    Celkový výnos činí {formatPercent(totalReturn)}.</>
                  ) : (
                    <> Při <strong className="text-foreground">nezměněných</strong> úrokových sazbách fond generuje bazický výnos {formatPercent(currentYield)} ročně z kupónových plateb.</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Zjednodušený model ukazuje citlivost dlouhodobých státních dluhopisů (60% portfolia). 
            Skutečné výnosy fondu závisí na celkovém složení portfolia a tržních podmínkách.
          </p>
        </div>
      </div>
    </section>
  );
}
