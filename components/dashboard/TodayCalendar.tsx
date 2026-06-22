import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type TodayCalendarEvent = {
  time: string;
  platform: string;
  title: string;
  status: string;
};

const defaultEvents: TodayCalendarEvent[] = [
  {
    time: "09:00",
    platform: "T",
    title: "Cara membuat konten yang engaging",
    status: "Terjadwal",
  },
  {
    time: "12:00",
    platform: "I",
    title: "Tips meningkatkan engagement",
    status: "Terjadwal",
  },
  {
    time: "15:00",
    platform: "Y",
    title: "Strategi content plan untuk bisnis",
    status: "Terjadwal",
  },
  {
    time: "18:00",
    platform: "f",
    title: "Ide konten untuk UMKM",
    status: "Draft",
  },
];

function getPlatformStyle(platform: string) {
  const normalized = platform.trim().toLowerCase();

  if (normalized.includes("tik") || normalized === "t") {
    return "bg-black text-white";
  }

  if (normalized.includes("insta") || normalized === "i") {
    return "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white";
  }

  if (normalized.includes("youtube") || normalized === "y") {
    return "bg-red-500 text-white";
  }

  if (normalized.includes("facebook") || normalized === "f") {
    return "bg-blue-600 text-white";
  }

  return "bg-slate-700 text-white";
}

function getStatusStyle(status: string) {
  const normalized = status.trim().toLowerCase();

  if (normalized.includes("draft")) {
    return "text-amber-500";
  }

  if (normalized.includes("selesai") || normalized.includes("done") || normalized.includes("published")) {
    return "text-blue-500";
  }

  return "text-emerald-600";
}

type TodayCalendarProps = {
  events?: TodayCalendarEvent[];
};

export function TodayCalendar({ events = defaultEvents }: TodayCalendarProps) {
  return (
    <section className="rounded-xl border border-app-border/50 bg-gradient-to-br from-app-surface via-app-surface to-app-surface/50 p-5 shadow-md shadow-app-primary/5 transition hover:shadow-lg hover:shadow-app-primary/10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[28px] font-bold tracking-[-0.025em] text-app-text-primary">Kalender Hari Ini</h2>
        <button type="button" className="text-sm font-bold text-app-primary transition hover:text-app-accent">
          Lihat Kalender →
        </button>
      </div>

      <div className="space-y-0.5 rounded-lg border border-app-border/30 overflow-hidden">
        {events.map((event, index) => (
          <article
            key={`${event.time}-${event.title}`}
            className={cn(
              "grid grid-cols-[56px_36px_1fr_auto] items-center gap-3 px-3.5 py-3 transition hover:bg-app-surface/50",
              index !== events.length - 1 && "border-b border-app-border/20"
            )}
          >
            <p className="text-sm font-bold text-app-text-secondary">{event.time}</p>
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold shadow-md ${getPlatformStyle(event.platform)}`}
            >
              {event.platform}
            </div>
            <p className="truncate text-sm font-medium text-app-text-primary">{event.title}</p>
            <p className={cn("text-xs font-bold", getStatusStyle(event.status))}>
              {event.status}
            </p>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-app-primary/30 bg-app-primary/10 px-4 py-3 text-sm font-bold text-app-primary transition hover:bg-app-primary/20 hover:shadow-md"
      >
        Buat Konten Baru
        <ArrowRight className="h-4 w-4" />
      </button>
    </section>
  );
}
