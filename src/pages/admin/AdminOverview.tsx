import { useEvents, summarize } from "@/lib/tracking";
import { Eye, MessageCircle, MousePointerClick, TrendingUp } from "lucide-react";

const Card = ({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon: typeof Eye;
}) => (
  <div className="rounded-xl border border-border bg-card/40 backdrop-blur p-5">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <p className="font-display text-2xl font-bold text-gradient-gold">
      {value}
    </p>
  </div>
);

const AdminOverview = () => {
  const events = useEvents();
  const s = summarize(events);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold mb-1">Visão Geral</h2>
        <p className="text-muted-foreground text-sm">
          Resumo em tempo real do que está acontecendo no site.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card label="Visitas" value={s.visits} icon={Eye} />
        <Card label="WhatsApp" value={s.whatsapp} icon={MessageCircle} />
        <Card label="Cliques" value={s.clicks} icon={MousePointerClick} />
        <Card
          label="Conversão"
          value={`${s.conversionRate.toFixed(1)}%`}
          icon={TrendingUp}
        />
      </div>

      <div className="rounded-xl border border-border bg-card/40 backdrop-blur p-5">
        <h3 className="font-display text-lg font-bold mb-3">
          Últimos eventos
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase text-muted-foreground border-b border-border">
                <th className="py-2 pr-3">Quando</th>
                <th className="py-2 pr-3">Tipo</th>
                <th className="py-2 pr-3">Página</th>
                <th className="py-2 pr-3">Dispositivo</th>
                <th className="py-2 pr-3">Idioma</th>
              </tr>
            </thead>
            <tbody>
              {events
                .slice(-12)
                .reverse()
                .map((e) => (
                  <tr key={e.id} className="border-b border-border/40">
                    <td className="py-2 pr-3 text-muted-foreground">
                      {new Date(e.timestamp).toLocaleString("pt-BR")}
                    </td>
                    <td className="py-2 pr-3">{e.type}</td>
                    <td className="py-2 pr-3 text-muted-foreground">{e.path}</td>
                    <td className="py-2 pr-3">{e.device}</td>
                    <td className="py-2 pr-3 text-muted-foreground">
                      {e.language}
                    </td>
                  </tr>
                ))}
              {events.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-6 text-center text-muted-foreground">
                    Ainda sem eventos registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
