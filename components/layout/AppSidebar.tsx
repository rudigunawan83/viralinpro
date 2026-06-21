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
        "sticky top-0 flex h-screen flex-col border-r border-app-border bg-app-surface px-3 py-5 transition-all duration-300",
        isSidebarCollapsed ? "w-20" : "w-64",
      )}
    >
      <div className="mb-7 flex items-center gap-3 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-app-primary to-app-accent text-white shadow-md shadow-app-primary/20">
          <span className="text-sm font-bold">V</span>
        </div>
        {!isSidebarCollapsed ? (
          <div>
            <p className="text-[24px] font-semibold leading-none tracking-[-0.03em] text-app-text-primary">viralin.pro</p>
          </div>
        ) : null}
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center rounded-xl px-3 py-2.5 text-[14px] font-medium transition",
                isActive
                  ? "bg-app-primary text-white shadow"
                  : "text-app-text-secondary hover:bg-app-primary/5 hover:text-app-text-primary",
              )}
            >
              <Icon className="h-[18px] w-[18px]" />
              {!isSidebarCollapsed ? <span className="ml-3 truncate">{item.label}</span> : null}
            </Link>
          );
        })}
      </nav>

      {!isSidebarCollapsed ? (
        <div className="mt-auto space-y-3">
          <div className="rounded-2xl border border-app-border bg-[#f8f9fd] p-4">
            <p className="text-[11px] text-app-text-secondary">Paket Anda</p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-app-primary/10 px-2 py-1 text-xs font-medium text-app-primary">
              <Crown className="h-3.5 w-3.5" />
              Pro Plan
            </div>
            <p className="mt-3 text-[11px] text-app-text-secondary">Berakhir 12 Juni 2025</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-app-border">
              <div className="h-full w-3/4 rounded-full bg-app-primary" />
            </div>
            <p className="mt-2 text-[11px] text-app-text-secondary">75% dari kuota AI terpakai</p>
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-app-primary/45 bg-white px-3 py-2 text-xs font-semibold text-app-primary transition hover:bg-app-primary/5"
            >
              Kelola Paket
            </button>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </button>
        </div>
      ) : null}
    </aside>
  );
}
