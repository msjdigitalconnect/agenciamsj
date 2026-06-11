import { ReactNode } from "react";
import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { isAdminAuthed, logoutAdmin } from "@/lib/adminAuth";
import { LogOut, Settings, BarChart3, LayoutGrid, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RequireAdmin = ({ children }: { children: ReactNode }) => {
  if (!isAdminAuthed()) return <Navigate to="/admindev" replace />;
  return <>{children}</>;
};

const AdminLayout = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    logoutAdmin();
    navigate("/admindev", { replace: true });
  };

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition ${
      isActive
        ? "bg-gradient-gold text-primary-foreground font-semibold"
        : "text-muted-foreground hover:text-primary hover:bg-card"
    }`;

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <h1 className="font-display text-lg sm:text-xl font-bold text-gradient-gold">
            Admin · Digital Connect
          </h1>
          <Button variant="outline" size="sm" onClick={onLogout}>
            <LogOut className="w-4 h-4" /> Sair
          </Button>
        </div>
      </header>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-6 grid lg:grid-cols-[220px_1fr] gap-6">
        <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
          <NavLink to="/admindev/dashboard" end className={linkCls}>
            <LayoutGrid className="w-4 h-4" /> Visão Geral
          </NavLink>
          <NavLink to="/admindev/dashboard/contacts" className={linkCls}>
            <Users className="w-4 h-4" /> Contatos
          </NavLink>
          <NavLink to="/admindev/dashboard/reports" className={linkCls}>
            <BarChart3 className="w-4 h-4" /> Relatórios
          </NavLink>
          <NavLink to="/admindev/dashboard/settings" className={linkCls}>
            <Settings className="w-4 h-4" /> Configurações
          </NavLink>
        </nav>

        <section className="min-w-0">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default AdminLayout;
