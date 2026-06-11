import { useState } from "react";
import { useContacts, deleteContact, clearContacts, type Contact } from "@/lib/contacts";
import { Button } from "@/components/ui/button";
import { Download, Trash2, Mail, Phone, MessageSquare, Search, User } from "lucide-react";

const AdminContacts = () => {
  const contacts = useContacts();
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Contact | null>(null);

  const filtered = contacts
    .filter((c) => {
      const s = q.trim().toLowerCase();
      if (!s) return true;
      return (
        c.name.toLowerCase().includes(s) ||
        c.email.toLowerCase().includes(s) ||
        c.phone.toLowerCase().includes(s) ||
        c.message.toLowerCase().includes(s)
      );
    })
    .sort((a, b) => b.timestamp - a.timestamp);

  const exportCSV = () => {
    const headers = ["nome", "email", "telefone", "mensagem", "data"];
    const rows = filtered.map((c) =>
      [c.name, c.email, c.phone, c.message, new Date(c.timestamp).toISOString()]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contatos-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl font-bold mb-1">Contatos</h2>
          <p className="text-muted-foreground text-sm">
            Pessoas que enviaram mensagem pelo formulário Fale Conosco.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" onClick={exportCSV} disabled={!filtered.length}>
            <Download className="w-4 h-4" /> Exportar CSV
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              if (confirm("Apagar todos os contatos registrados?")) clearContacts();
            }}
            disabled={!contacts.length}
          >
            <Trash2 className="w-4 h-4" /> Limpar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          ["Total", contacts.length],
          ["Hoje", contacts.filter((c) => Date.now() - c.timestamp < 86400000).length],
          ["7 dias", contacts.filter((c) => Date.now() - c.timestamp < 7 * 86400000).length],
          ["30 dias", contacts.filter((c) => Date.now() - c.timestamp < 30 * 86400000).length],
        ].map(([l, v]) => (
          <div
            key={l as string}
            className="rounded-xl border border-border bg-card/40 backdrop-blur p-4"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
            <p className="font-display text-xl font-bold text-gradient-gold">{v}</p>
          </div>
        ))}
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por nome, email, telefone ou mensagem..."
          className="w-full bg-card/40 border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div className="rounded-xl border border-border bg-card/40 backdrop-blur overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase text-muted-foreground border-b border-border">
                <th className="py-3 px-4">Nome</th>
                <th className="py-3 px-4">E-mail</th>
                <th className="py-3 px-4">Telefone</th>
                <th className="py-3 px-4">Mensagem</th>
                <th className="py-3 px-4">Recebido</th>
                <th className="py-3 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-border/40 hover:bg-card/60 transition"
                >
                  <td className="py-3 px-4 font-medium">{c.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{c.email}</td>
                  <td className="py-3 px-4 text-muted-foreground">{c.phone}</td>
                  <td className="py-3 px-4 max-w-xs truncate text-muted-foreground">
                    {c.message}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground whitespace-nowrap">
                    {new Date(c.timestamp).toLocaleString("pt-BR")}
                  </td>
                  <td className="py-3 px-4 text-right whitespace-nowrap">
                    <button
                      onClick={() => setSelected(c)}
                      className="text-primary text-xs hover:underline mr-3"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Apagar este contato?")) deleteContact(c.id);
                      }}
                      className="text-destructive text-xs hover:underline"
                    >
                      Apagar
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-muted-foreground">
                    {contacts.length === 0
                      ? "Ainda não há contatos registrados."
                      : "Nenhum contato corresponde à busca."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card border border-primary/30 rounded-2xl max-w-lg w-full p-6 gold-border-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-gradient-gold">
              {selected.name}
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span>{selected.email}</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <span>{selected.phone}</span>
              </p>
              <p className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-primary mt-0.5" />
                <span className="whitespace-pre-wrap">{selected.message}</span>
              </p>
              <p className="flex items-start gap-3 text-muted-foreground">
                <User className="w-4 h-4 mt-0.5" />
                <span>Recebido em {new Date(selected.timestamp).toLocaleString("pt-BR")}</span>
              </p>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" size="sm" onClick={() => setSelected(null)}>
                Fechar
              </Button>
              <Button
                variant="gold"
                size="sm"
                asChild
              >
                <a
                  href={`https://wa.me/55${selected.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
