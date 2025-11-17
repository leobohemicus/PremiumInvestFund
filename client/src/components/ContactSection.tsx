import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Zpráva odeslána",
      description: "Děkujeme za váš zájem. Brzy vás budeme kontaktovat.",
    });
    setFormData({ name: "", email: "", phone: "", amount: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Kontakt
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
            Máte zájem?
          </h2>
          <p className="text-lg text-muted-foreground">
            Kontaktujte nás pro nezávaznou konzultaci a detailní informace o fondu
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="font-semibold text-xl mb-6">Poptávkový formulář</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Jméno a příjmení *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Jan Novák"
                  required
                  data-testid="input-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="jan.novak@example.com"
                  required
                  data-testid="input-email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+420 123 456 789"
                  data-testid="input-phone"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Plánovaná výše investice</Label>
                <Input
                  id="amount"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  placeholder="1 000 000 Kč"
                  data-testid="input-amount"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Zpráva</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Vaše dotazy nebo poznámky..."
                  rows={4}
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-submit">
                Odeslat poptávku
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-6">Kontaktní údaje</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">E-mail</p>
                    <a
                      href="mailto:info@codyainvest.cz"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-email"
                    >
                      info@codyainvest.cz
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Telefon</p>
                    <a
                      href="tel:+420123456789"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-phone"
                    >
                      +420 123 456 789
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-primary/10 p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Adresa</p>
                    <p className="text-muted-foreground">
                      Praha, Česká republika
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-muted/50">
              <h3 className="font-semibold text-xl mb-4">Právní informace</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">CODYA Invest s.r.o.</strong>
                  <br />
                  Správce fondu FDI - Fond dlouhodobých investic
                </p>
                <p className="leading-relaxed">
                  Fond je určen výhradně kvalifikovaným investorům ve smyslu
                  zákona č. 240/2013 Sb., o investičních společnostech a
                  investičních fondech.
                </p>
                <p className="leading-relaxed text-xs">
                  Toto není nabídka k investování. Veškeré investice podléhají
                  riziku ztráty hodnoty. Minulá výkonnost není zárukou budoucích
                  výsledků.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
