"use client";

import { useMemo } from "react";
import { Bell, ChevronDown, Gift, Menu, Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import { getAuthSession } from "@/lib/auth-storage";
import { useAppContext } from "@/lib/app-context";

const titleMap: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/riset": "Riset Konten",
  "/kompetitor": "Analisis Kompetitor",
  "/studio": "Studio AI",
  "/kalender": "Kalender Konten",
  "/publikasi": "Publikasi",
  "/analitik": "Analitik",
  "/inbox": "Kotak Masuk",
  "/asisten": "Asisten AI",
  "/merek": "Memori Merek",
  "/tim": "Tim",
  "/langganan": "Langganan",
  "/pengaturan": "Pengaturan",
};

export function AppHeader() {
  const { toggleSidebar } = useAppContext();
  const pathname = usePathname();
  const title = titleMap[pathname] ?? "Viralin.pro";
  const profile = useMemo(() => {
    const session = getAuthSession();
    const fullName = session?.data?.user?.fullName?.trim() || "Pengguna";
    const role = session?.data?.user?.role?.trim() || "Member";
    const initials = fullName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("") || "U";

    return {
      fullName,
      role,
      initials,
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 glass border-b border-app-border shadow-sm">
      <div className="flex h-[78px] items-center justify-between px-4 sm:px-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleSidebar}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-app-border bg-app-surface/50 text-app-text-secondary transition hover:bg-app-surface hover:text-app-primary hover:shadow-md"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="animate-slide-in-left">
            <p className="text-[24px] font-bold leading-none tracking-[-0.03em] text-app-text-primary">{title}</p>
            <p className="mt-1 text-[12px] text-app-text-secondary">Selamat datang kembali, {profile.fullName}! 👋</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-app-primary to-app-accent px-4 py-2 text-sm font-semibold text-white shadow-md shadow-app-primary/30 transition hover:shadow-lg hover:shadow-app-primary/40 hover:scale-105"
          >
            <Plus className="h-4 w-4" />
            Buat Konten
          </button>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-app-border/50 bg-app-surface/50 text-app-text-secondary transition hover:bg-app-surface hover:text-app-primary hover:shadow-md"
            aria-label="Gift"
          >
            <Gift className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-app-border/50 bg-app-surface/50 text-app-text-secondary transition hover:bg-app-surface hover:text-app-primary hover:shadow-md"
            aria-label="Notifications"
          >
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50" />
            <Bell className="h-[18px] w-[18px]" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-transparent px-3 py-1.5 transition hover:bg-app-surface/50 hover:border-app-border hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-app-primary to-app-accent text-sm font-semibold text-white shadow-md shadow-app-primary/30">
              {profile.initials}
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-app-text-primary">{profile.fullName}</p>
              <p className="text-xs text-app-text-secondary">{profile.role}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-app-text-secondary" />
          </button>
        </div>
      </div>
    </header>
  );
}
