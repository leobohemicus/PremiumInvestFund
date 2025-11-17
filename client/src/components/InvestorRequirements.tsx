import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function InvestorRequirements() {
  const requirements = [
    {
      title: "Minimální investice",
      value: "1 000 000 Kč",
      description: "Pro kvalifikované investory dle zákona",
    },
    {
      title: "Investiční horizont",
      value: "3+ roky",
      description: "Doporučený minimální horizont pro optimální výnos",
    },
    {
      title: "Vstupní poplatek",
      value: "Max. 4%",
      description: "Při nákupu podílových jednotek (třída A)",
    },
    {
      title: "Výstupní poplatek",
      value: "Max. 3%",
      description: "Při prodeji v prvním roce (poté klesá)",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Podmínky vstupu
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
            Pro kvalifikované investory
          </h2>
          <p className="text-lg text-muted-foreground">
            Fond je určen kvalifikovaným investorům s jasným investičním cílem
          </p>
        </div>

        <Card className="p-8 md:p-12 mb-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="space-y-2" data-testid={`requirement-${index}`}>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{req.title}</h3>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-primary tabular-nums">
                  {req.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-card border-primary/20">
          <div className="flex items-start gap-4">
            <div className="rounded-md bg-primary/10 p-2 mt-1">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Kvalifikovaný investor
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Podle zákona č. 240/2013 Sb. je kvalifikovaným investorem osoba,
                která splňuje podmínky stanovené zákonem o investičních
                společnostech a investičních fondech. Detailní informace o
                podmínkách vám rádi poskytneme při osobní konzultaci.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
