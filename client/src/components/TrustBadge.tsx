import { Shield } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border-2 border-primary/20 shadow-lg hover-elevate transition-all duration-300">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
        <div className="relative rounded-full bg-primary/10 p-2">
          <Shield className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="text-left">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider">Regulováno</p>
        <p className="text-sm font-bold">ČNB</p>
      </div>
    </div>
  );
}
