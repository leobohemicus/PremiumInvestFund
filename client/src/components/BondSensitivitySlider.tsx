import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { TrendingDown, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function BondSensitivitySlider() {
  const [rateChange, setRateChange] = useState(0);
  const [duration, setDuration] = useState(15);
  
  const currentYield = 6.05;
  
  // Výpočet změny ceny podle durace
  const priceChange = -duration * rateChange;
  const totalReturn = currentYield + priceChange;

  // Generování dat pro graf - 5 bodů s fixními hodnotami + predikce
  const chartData = useMemo(() => {
    const finalValue = 100 + totalReturn; // Konečná hodnota odpovídá celkovému výnosu
    
    // 5 bodů: první 4 fixní kolem 98 (±2.5 pb volatilita), poslední = predikce
    return [
      { name: '', cena: 96.0 },   // Bod 1: historická volatilita -2 pb od 98
      { name: '', cena: 99.5 },   // Bod 2: historická volatilita +1.5 pb od 98
      { name: '', cena: 97.5 },   // Bod 3: historická volatilita -0.5 pb od 98
      { name: '', cena: 100 },    // Bod 4: současná hodnota (přesně 100)
      { name: '', cena: Number(finalValue.toFixed(2)) }  // Bod 5: predikce
    ];
  }, [totalReturn]);
  
  // Statická osa Y pokrývající celý rozsah možných výsledků fondu
  // Max scénář: rate -4%, duration 20 → totalReturn ~+86% → hodnota ~186
  // Min scénář: rate +2%, duration 20 → totalReturn ~-34% → hodnota ~66
  const yAxisDomain = [60, 190];

  const formatPercent = (value: number) => {
    const sign = value > 0 ? "+" : "";
    return `${sign}${value.toFixed(1)}%`;
  };

  const formatPercentAbs = (value: number) => {
    return `${value.toFixed(1)}%`;
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
            Zjistěte, jak změna úrokových sazeb a durace ovlivní hodnotu portfolia
          </p>
        </div>

        <Card className="p-6 md:p-8 border-2">
          <div className="space-y-6">
            {/* První slider - Změna úrokové sazby */}
            <div className="text-center">
              <p id="rate-label" className="text-sm text-muted-foreground mb-2">
                Změna úrokové sazby (Δy %)
              </p>
              <div className="flex items-center justify-center gap-2 mb-3">
                <TrendingDown className={`h-5 w-5 ${rateChange < 0 ? 'text-primary' : 'text-muted-foreground/30'}`} />
                <output role="status" aria-live="polite" className="font-bold text-3xl md:text-4xl tabular-nums" data-testid="output-rate-change">
                  {formatPercent(rateChange)}
                </output>
                <TrendingUp className={`h-5 w-5 ${rateChange > 0 ? 'text-destructive' : 'text-muted-foreground/30'}`} />
              </div>
              
              <div className="px-4 md:px-8">
                <Slider
                  value={[rateChange]}
                  onValueChange={(values) => setRateChange(values[0])}
                  min={-4}
                  max={2}
                  step={0.1}
                  className="cursor-pointer"
                  data-testid="slider-rate-change"
                  aria-labelledby="rate-label"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>-4%</span>
                  <span>0%</span>
                  <span>+2%</span>
                </div>
              </div>
            </div>

            {/* Druhý slider - Durace */}
            <div className="text-center pt-4 border-t border-border">
              <p id="duration-label" className="text-sm text-muted-foreground mb-2">
                Průměrná délka splatnosti dluhopisu (Durace)
              </p>
              <output role="status" aria-live="polite" className="font-bold text-3xl md:text-4xl tabular-nums mb-3 block" data-testid="output-duration">
                {duration} <span className="text-lg text-muted-foreground">let</span>
              </output>
              
              <div className="px-4 md:px-8">
                <Slider
                  value={[duration]}
                  onValueChange={(values) => setDuration(values[0])}
                  min={5}
                  max={20}
                  step={1}
                  className="cursor-pointer"
                  data-testid="slider-duration"
                  aria-labelledby="duration-label"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5 let</span>
                  <span>12 let</span>
                  <span>20 let</span>
                </div>
              </div>
            </div>

            {/* Graf */}
            <div className="pt-6 border-t border-border">
              <div className="mb-4">
                <h4 className="font-semibold text-center mb-2">
                  Projekce indexu ceny dluhopisu
                </h4>
                <p className="text-sm text-muted-foreground text-center">
                  Vývoj v čase (závislý na duraci)
                </p>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                  >
                    <defs>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={1} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <CartesianGrid 
                      strokeDasharray="3 3" 
                      stroke="hsl(var(--border))" 
                      opacity={0.3}
                    />
                    <XAxis 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))"
                      tick={false}
                      label={{ 
                        value: 'Čas', 
                        position: 'insideBottom',
                        offset: -10,
                        style: { fill: 'hsl(var(--muted-foreground))', fontSize: 12 }
                      }}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      domain={yAxisDomain}
                      label={{ 
                        value: 'Index ceny', 
                        angle: -90, 
                        position: 'insideLeft',
                        style: { fill: 'hsl(var(--muted-foreground))', fontSize: 12 }
                      }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        padding: '8px 12px'
                      }}
                      labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}
                      itemStyle={{ color: 'hsl(var(--primary))' }}
                      formatter={(value: number) => [`${value.toFixed(2)}`, 'Cena']}
                    />
                    <Line 
                      type="linear" 
                      dataKey="cena" 
                      stroke="url(#lineGradient)"
                      strokeWidth={3}
                      dot={{ 
                        fill: 'hsl(var(--primary))', 
                        r: 6,
                        strokeWidth: 2,
                        stroke: 'hsl(var(--background))'
                      }}
                      activeDot={{ 
                        r: 8,
                        fill: 'hsl(var(--primary))',
                        filter: 'url(#glow)'
                      }}
                      isAnimationActive={true}
                      animationDuration={800}
                      animationEasing="ease-in-out"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* KPI boxy */}
            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="text-center p-6 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-2">Bazický výnos</p>
                <output role="status" aria-live="polite" className="text-2xl font-bold text-foreground tabular-nums block" data-testid="value-base-yield">
                  {formatPercent(currentYield)}
                </output>
                <p className="text-xs text-muted-foreground mt-1">p.a.</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-2">Změna ceny dluhopisů</p>
                <output role="status" aria-live="polite" className={`text-2xl font-bold tabular-nums block ${priceChange > 0 ? 'text-primary' : priceChange < 0 ? 'text-destructive' : 'text-foreground'}`} data-testid="output-price-change">
                  {formatPercent(priceChange)}
                </output>
                <p className="text-xs text-muted-foreground mt-1">kapitálový zisk/ztráta</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-primary/10 border-2 border-primary/20">
                <p className="text-sm font-semibold text-primary mb-2">Celkový výnos</p>
                <output role="status" aria-live="polite" className={`text-3xl font-bold tabular-nums block ${totalReturn > currentYield ? 'text-primary' : totalReturn < 0 ? 'text-destructive' : 'text-foreground'}`} data-testid="output-total-return">
                  {formatPercent(totalReturn)}
                </output>
                <p className="text-xs text-muted-foreground mt-1">za rok</p>
              </div>
            </div>

            {/* Vysvětlení */}
            <div className="pt-6 border-t border-border">
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-primary rounded-full" />
                  Jak to funguje?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tento model ilustruje citlivost dlouhodobých státních dluhopisů, které tvoří jádro portfolia (60%). 
                  Nastavte duraci ({duration} let) a změnu sazeb ({formatPercent(rateChange)}). 
                  {rateChange < 0 ? (
                    <> Při <strong className="text-foreground">poklesu</strong> úrokových sazeb o {formatPercentAbs(Math.abs(rateChange))} 
                    roste tržní cena existujících dluhopisů, což přináší kapitálový zisk {formatPercent(priceChange)}. 
                    Celkový výnos tak dosahuje <strong className="text-primary">{formatPercent(totalReturn)}</strong>.</>
                  ) : rateChange > 0 ? (
                    <> Při <strong className="text-foreground">růstu</strong> úrokových sazeb o {formatPercentAbs(rateChange)} 
                    klesá tržní cena existujících dluhopisů, což znamená kapitálovou ztrátu {formatPercent(priceChange)}. 
                    Celkový výnos činí {formatPercent(totalReturn)}.</>
                  ) : (
                    <> Při <strong className="text-foreground">nezměněných</strong> úrokových sazbách fond generuje bazický výnos {formatPercentAbs(currentYield)} ročně z kupónových plateb.</>
                  )}
                  {' '}Graf ukazuje projekci vývoje indexu ceny pomocí zjednodušeného 5-bodového modelu.
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
