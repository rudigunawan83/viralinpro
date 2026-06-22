"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  Brain,
  CalendarDays,
  Cog,
  Compass,
  Crown,
  FileText,
  Home,
  Inbox,
  Layers,
  LogOut,
  Megaphone,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import { clearAllLocalStorage } from "@/lib/auth-storage";
import { useAppContext } from "@/lib/app-context";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/riset", label: "Riset Konten", icon: Compass },
  { href: "/kompetitor", label: "Analisis Kompetitor", icon: Target },
  { href: "/studio", label: "Studio AI", icon: Rocket },
  { href: "/kalender", label: "Kalender Konten", icon: CalendarDays },
  { href: "/publikasi", label: "Publikasi", icon: Megaphone },
  { href: "/inbox", label: "Kotak Masuk", icon: Inbox },
  { href: "/analitik", label: "Analitik", icon: BarChart3 },
  { href: "/asisten", label: "Asisten AI", icon: Brain },
  { href: "/merek", label: "Memori Merek", icon: FileText },
  { href: "/tim", label: "Tim", icon: Users },
  { href: "/langganan", label: "Langganan", icon: Layers },
  { href: "/pengaturan", label: "Pengaturan", icon: Cog },
];

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isSidebarCollapsed } = useAppContext();

  function handleLogout() {
    clearAllLocalStorage();
    router.replace("/login");
  }

  return (
    <aside
      className={cn(
        "sticky top-0 flex h-screen flex-col border-r border-app-border glass px-3 py-5 transition-all duration-300 shadow-sm",
        isSidebarCollapsed ? "w-20" : "w-64",
      )}
    >
      <div className="mb-7 flex items-center gap-3 px-2 animate-slide-in-left">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-app-primary via-app-secondary to-app-accent text-white shadow-lg shadow-app-primary/40">
          <span className="text-lg font-bold">V</span>
        </div>
        {!isSidebarCollapsed ? (
          <div>
            <p className="text-[20px] font-bold leading-none tracking-[-0.02em] text-app-text-primary">viralin.pro</p>
          </div>
        ) : null}
      </div>

      <nav className="space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center rounded-lg px-3 py-2.5 text-[14px] font-medium transition duration-200",
                isActive
                  ? "bg-gradient-to-r from-app-primary to-app-accent text-white shadow-md shadow-app-primary/30"
                  : "text-app-text-secondary hover:bg-app-surface/50 hover:text-app-primary",
              )}
            >
              <Icon className="h-[18px] w-[18px] flex-shrink-0" />
              {!isSidebarCollapsed ? <span className="ml-3 truncate">{item.label}</span> : null}
            </Link>
          );
        })}
      </nav>

      {!isSidebarCollapsed ? (
        <div className="mt-auto space-y-3 animate-slide-in-up">
          <div className="rounded-xl border border-app-border/50 bg-gradient-to-br from-app-primary/5 to-app-accent/5 p-4 shadow-sm">
            <p className="text-[11px] font-semibold text-app-text-secondary uppercase tracking-wide">Paket Anda</p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-app-primary/15 px-2.5 py-1.5 text-xs font-bold text-app-primary shadow-sm">
              <Crown className="h-3.5 w-3.5" />
              Pro Plan
            </div>
            <p className="mt-3 text-[11px] text-app-text-secondary">Berakhir 12 Juni 2025</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-app-border/50">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-app-primary to-app-accent shadow-sm shadow-app-primary/30" />
            </div>
            <p className="mt-2 text-[11px] text-app-text-secondary">75% dari kuota AI terpakai</p>
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-app-primary/30 bg-app-primary/10 px-3 py-2 text-xs font-semibold text-app-primary transition hover:bg-app-primary/20 hover:shadow-md"
            >
              Kelola Paket
            </button>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-red-200/50 bg-red-50/50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50 hover:shadow-md dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20"
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </button>
        </div>
      ) : null}
    </aside>
  );
}
