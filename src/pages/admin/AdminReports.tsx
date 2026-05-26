import { useMemo, useState } from "react";
import {
  useEvents,
  summarize,
  filterByRange,
  dailySeries,
  RangeKey,
  clearEvents,
} from "@/lib/tracking";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Download, FileText, Trash2 } from "lucide-react";
import jsPDF from "jspdf";

const RANGES: { key: RangeKey; label: string }[] = [
  { key: "today", label: "Hoje" },
  { key: "7d", label: "7 dias" },
  { key: "30d", label: "30 dias" },
  { key: "all", label: "Todos" },
];

const GOLD = "#D4AF37";
const NAVY = "#05101E";
const COLORS = [GOLD, "#8a7126", "#f3d36b", "#5b4a14"];

const AdminReports = () => {
  const events = useEvents();
  const [range, setRange] = useState<RangeKey>("7d");

  const filtered = useMemo(() => filterByRange(events, range), [events, range]);
  const s = useMemo(() => summarize(filtered), [filtered]);
  const series = useMemo(
    () => dailySeries(filtered, range === "today" ? 1 : range === "30d" ? 30 : range === "all" ? 30 : 7),
    [filtered, range],
  );

  const deviceData = Object.entries(s.byDevice).map(([name, value]) => ({
    name,
    value,
  }));
  const typeData = Object.entries(s.byType).map(([name, value]) => ({
    name,
    value,
  }));
  const langData = Object.entries(s.byLang).map(([name, value]) => ({
    name,
    value,
  }));

  const exportCSV = () => {
    const headers = ["id", "type", "timestamp", "iso", "path", "device", "language", "referrer"];
    const rows = filtered.map((e) =>
      [
        e.id,
        e.type,
        e.timestamp,
        new Date(e.timestamp).toISOString(),
        e.path,
        e.device,
        e.language,
        e.referrer,
      ]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `relatorio-${range}-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Relatório - Digital Connect", 14, 18);
    doc.setFontSize(11);
    doc.text(`Período: ${RANGES.find((r) => r.key === range)?.label || range}`, 14, 28);
    doc.text(`Gerado em: ${new Date().toLocaleString("pt-BR")}`, 14, 35);
    doc.setFontSize(13);
    doc.text("Resumo", 14, 48);
    doc.setFontSize(11);
    const lines = [
      `Visitas (PageView): ${s.visits}`,
      `Cliques: ${s.clicks}`,
      `WhatsApp: ${s.whatsapp}`,
      `Contatos: ${s.contacts}`,
      `Taxa de Conversão: ${s.conversionRate.toFixed(2)}%`,
      `CTR: ${s.ctr.toFixed(2)}%`,
    ];
    lines.forEach((l, i) => doc.text(l, 14, 58 + i * 7));

    doc.setFontSize(13);
    doc.text("Por dispositivo", 14, 110);
    doc.setFontSize(11);
    Object.entries(s.byDevice).forEach(([k, v], i) =>
      doc.text(`${k}: ${v}`, 14, 118 + i * 7),
    );

    doc.setFontSize(13);
    doc.text("Por idioma", 110, 110);
    doc.setFontSize(11);
    Object.entries(s.byLang).forEach(([k, v], i) =>
      doc.text(`${k}: ${v}`, 110, 118 + i * 7),
    );

    doc.save(`relatorio-${range}-${Date.now()}.pdf`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl font-bold mb-1">Relatórios</h2>
          <p className="text-muted-foreground text-sm">
            Gráficos de crescimento, métricas e exportações.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {RANGES.map((r) => (
            <button
              key={r.key}
              onClick={() => setRange(r.key)}
              className={`px-3 py-1.5 text-xs rounded-full border transition ${
                range === r.key
                  ? "bg-gradient-gold text-primary-foreground border-transparent"
                  : "border-border text-muted-foreground hover:text-primary"
              }`}
            >
              {r.label}
            </button>
          ))}
          <Button size="sm" variant="outline" onClick={exportCSV}>
            <Download className="w-4 h-4" /> CSV
          </Button>
          <Button size="sm" variant="outline" onClick={exportPDF}>
            <FileText className="w-4 h-4" /> PDF
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              if (confirm("Apagar todos os eventos registrados?")) clearEvents();
            }}
          >
            <Trash2 className="w-4 h-4" /> Limpar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          ["Visitas", s.visits],
          ["WhatsApp", s.whatsapp],
          ["Cliques", s.clicks],
          ["Conversão", `${s.conversionRate.toFixed(1)}%`],
        ].map(([l, v]) => (
          <div
            key={l as string}
            className="rounded-xl border border-border bg-card/40 backdrop-blur p-4"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {l}
            </p>
            <p className="font-display text-xl font-bold text-gradient-gold">
              {v}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card/40 backdrop-blur p-5">
        <h3 className="font-display text-lg font-bold mb-4">
          Crescimento diário
        </h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={series}>
              <defs>
                <linearGradient id="gPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={GOLD} stopOpacity={0.6} />
                  <stop offset="100%" stopColor={GOLD} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} allowDecimals={false} />
              <Tooltip
                contentStyle={{ background: NAVY, border: `1px solid ${GOLD}` }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="PageView"
                stroke={GOLD}
                fill="url(#gPv)"
              />
              <Line type="monotone" dataKey="WhatsApp" stroke="#25D366" />
              <Line type="monotone" dataKey="Click" stroke="#9ca3af" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-card/40 backdrop-blur p-5">
          <h3 className="font-display text-lg font-bold mb-4">
            Eventos por tipo
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={typeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    background: NAVY,
                    border: `1px solid ${GOLD}`,
                  }}
                />
                <Bar dataKey="value" fill={GOLD} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card/40 backdrop-blur p-5">
          <h3 className="font-display text-lg font-bold mb-4">
            Dispositivos
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label
                >
                  {deviceData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: NAVY,
                    border: `1px solid ${GOLD}`,
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card/40 backdrop-blur p-5">
        <h3 className="font-display text-lg font-bold mb-4">
          Visitas por idioma
        </h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={langData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis type="number" stroke="#9ca3af" fontSize={12} allowDecimals={false} />
              <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={12} />
              <Tooltip
                contentStyle={{ background: NAVY, border: `1px solid ${GOLD}` }}
              />
              <Bar dataKey="value" fill={GOLD} radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
