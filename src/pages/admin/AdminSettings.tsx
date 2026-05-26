import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  getWhatsAppNumber,
  setWhatsAppNumber,
  getPortfolio,
  savePortfolio,
  PortfolioItem,
} from "@/lib/settings";
import { Plus, Save, Trash2, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const PIXEL_FB_KEY = "msj:pixel_fb";
const PIXEL_GA_KEY = "msj:pixel_ga";
const PIXEL_GTM_KEY = "msj:pixel_gtm";

const AdminSettings = () => {
  const [wa, setWa] = useState("");
  const [pixelFb, setPixelFb] = useState("");
  const [pixelGa, setPixelGa] = useState("");
  const [pixelGtm, setPixelGtm] = useState("");
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    setWa(getWhatsAppNumber());
    setPixelFb(localStorage.getItem(PIXEL_FB_KEY) || "");
    setPixelGa(localStorage.getItem(PIXEL_GA_KEY) || "");
    setPixelGtm(localStorage.getItem(PIXEL_GTM_KEY) || "");
    setPortfolio(getPortfolio());
  }, []);

  const saveWA = () => {
    setWhatsAppNumber(wa);
    toast.success("Número do WhatsApp atualizado em todo o site.");
  };

  const savePixels = () => {
    localStorage.setItem(PIXEL_FB_KEY, pixelFb.trim());
    localStorage.setItem(PIXEL_GA_KEY, pixelGa.trim());
    localStorage.setItem(PIXEL_GTM_KEY, pixelGtm.trim());
    toast.success("Pixels salvos. Recarregue o site público para ativar.");
  };

  const addItem = () => {
    const item: PortfolioItem = {
      id: `p${Date.now()}`,
      title: "Novo projeto",
      description: "Descrição do projeto",
      url: "https://",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      tag: "Site",
    };
    const next = [...portfolio, item];
    setPortfolio(next);
    savePortfolio(next);
  };
  const updateItem = (id: string, patch: Partial<PortfolioItem>) => {
    const next = portfolio.map((p) => (p.id === id ? { ...p, ...patch } : p));
    setPortfolio(next);
    savePortfolio(next);
  };
  const removeItem = (id: string) => {
    const next = portfolio.filter((p) => p.id !== id);
    setPortfolio(next);
    savePortfolio(next);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-bold mb-1">Configurações</h2>
        <p className="text-muted-foreground text-sm">
          Pixels de rastreio, número do WhatsApp e gerenciamento do portfólio.
        </p>
      </div>

      {/* WhatsApp */}
      <section className="rounded-xl border border-border bg-card/40 backdrop-blur p-5">
        <h3 className="font-display text-lg font-bold mb-1 flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-primary" /> Número do WhatsApp
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Atualiza automaticamente todos os botões de WhatsApp do site.
          Formato com DDI + DDD + número (apenas dígitos). Ex: 5516993820879.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            value={wa}
            onChange={(e) => setWa(e.target.value)}
            placeholder="5516993820879"
            className="flex-1"
          />
          <Button variant="gold" onClick={saveWA}>
            <Save className="w-4 h-4" /> Salvar
          </Button>
        </div>
      </section>

      {/* Pixels */}
      <section className="rounded-xl border border-border bg-card/40 backdrop-blur p-5">
        <h3 className="font-display text-lg font-bold mb-1">
          Pixels de rastreio
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Cole apenas os IDs. Os scripts são carregados automaticamente no site
          público quando preenchidos.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">
              Facebook Pixel ID
            </label>
            <Input
              placeholder="000000000000000"
              value={pixelFb}
              onChange={(e) => setPixelFb(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">
              Google Analytics (GA4)
            </label>
            <Input
              placeholder="G-XXXXXXXXXX"
              value={pixelGa}
              onChange={(e) => setPixelGa(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">
              Google Tag Manager
            </label>
            <Input
              placeholder="GTM-XXXXXX"
              value={pixelGtm}
              onChange={(e) => setPixelGtm(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="gold" onClick={savePixels}>
            <Save className="w-4 h-4" /> Salvar pixels
          </Button>
        </div>
      </section>

      {/* Portfolio */}
      <section className="rounded-xl border border-border bg-card/40 backdrop-blur p-5">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div>
            <h3 className="font-display text-lg font-bold">Portfólio</h3>
            <p className="text-muted-foreground text-sm">
              Itens exibidos na aba <span className="text-primary">Portfólio</span> do site.
            </p>
          </div>
          <Button variant="gold" onClick={addItem}>
            <Plus className="w-4 h-4" /> Novo projeto
          </Button>
        </div>

        <div className="space-y-4">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-xl p-4 grid md:grid-cols-[120px_1fr_auto] gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-[120px] h-24 object-cover rounded-lg border border-border"
              />
              <div className="space-y-2 min-w-0">
                <Input
                  value={item.title}
                  onChange={(e) => updateItem(item.id, { title: e.target.value })}
                  placeholder="Título"
                />
                <Textarea
                  rows={2}
                  value={item.description}
                  onChange={(e) =>
                    updateItem(item.id, { description: e.target.value })
                  }
                  placeholder="Descrição"
                />
                <div className="grid sm:grid-cols-3 gap-2">
                  <Input
                    value={item.url}
                    onChange={(e) => updateItem(item.id, { url: e.target.value })}
                    placeholder="URL"
                  />
                  <Input
                    value={item.image}
                    onChange={(e) =>
                      updateItem(item.id, { image: e.target.value })
                    }
                    placeholder="Imagem (URL)"
                  />
                  <Input
                    value={item.tag || ""}
                    onChange={(e) => updateItem(item.id, { tag: e.target.value })}
                    placeholder="Tag (ex: Site, App)"
                  />
                </div>
              </div>
              <div className="flex md:flex-col gap-2 md:justify-start justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          {portfolio.length === 0 && (
            <p className="text-muted-foreground text-sm text-center py-6">
              Nenhum projeto cadastrado.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminSettings;
