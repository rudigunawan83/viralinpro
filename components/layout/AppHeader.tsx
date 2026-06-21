"use client";

import { Bell, ChevronDown, Gift, Menu, Plus } from "lucide-react";
import { usePathname } from "next/navigation";
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

  return (
    <header className="sticky top-0 z-20 border-b border-app-border bg-app-surface/95 backdrop-blur">
      <div className="flex h-[78px] items-center justify-between px-4 sm:px-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleSidebar}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-app-border text-app-text-secondary transition hover:text-app-text-primary"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div>
            <p className="text-[24px] font-semibold leading-none tracking-[-0.03em] text-app-text-primary">{title}</p>
            <p className="mt-1 text-[12px] text-app-text-secondary">Selamat datang kembali, Andi! 👋</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-app-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95"
          >
            <Plus className="h-4 w-4" />
            Buat Konten
          </button>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-app-border text-app-text-secondary transition hover:text-app-text-primary"
            aria-label="Gift"
          >
            <Gift className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-app-border text-app-text-secondary transition hover:text-app-text-primary"
            aria-label="Notifications"
          >
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
            <Bell className="h-[18px] w-[18px]" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-transparent px-2 py-1 transition hover:border-app-border">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-app-border text-sm font-semibold text-app-text-primary">
              AP
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-app-text-primary">Andi Pratama</p>
              <p className="text-xs text-app-text-secondary">Owner</p>
            </div>
            <ChevronDown className="h-4 w-4 text-app-text-secondary" />
          </button>
        </div>
      </div>
    </header>
  );
}
