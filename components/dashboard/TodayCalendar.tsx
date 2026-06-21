import { ArrowRight } from "lucide-react";

const events = [
  {
    time: "09:00",
    platform: "T",
    platformClassName: "bg-black text-white",
    title: "Cara membuat konten yang engaging",
    status: "Terjadwal",
    statusClassName: "text-emerald-600",
  },
  {
    time: "12:00",
    platform: "I",
    platformClassName: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white",
    title: "Tips meningkatkan engagement",
    status: "Terjadwal",
    statusClassName: "text-emerald-600",
  },
  {
    time: "15:00",
    platform: "Y",
    platformClassName: "bg-red-500 text-white",
    title: "Strategi content plan untuk bisnis",
    status: "Terjadwal",
    statusClassName: "text-emerald-600",
  },
  {
    time: "18:00",
    platform: "f",
    platformClassName: "bg-blue-600 text-white",
    title: "Ide konten untuk UMKM",
    status: "Draft",
    statusClassName: "text-amber-500",
  },
];

export function TodayCalendar() {
  return (
    <section className="rounded-2xl border border-app-border bg-app-surface p-4 shadow-[0_6px_18px_rgba(26,33,52,0.05)]">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[30px] font-semibold tracking-[-0.025em] text-app-text-primary">Kalender Hari Ini</h2>
        <button type="button" className="text-sm font-medium text-app-primary">
          Lihat Kalender
        </button>
      </div>

      <div className="space-y-0">
        {events.map((event) => (
          <article
            key={`${event.time}-${event.title}`}
            className="grid grid-cols-[52px_28px_1fr_auto] items-center gap-2 border-b border-app-border/70 px-2 py-2.5 last:border-b-0"
          >
            <p className="text-[13px] text-app-text-secondary">{event.time}</p>
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-semibold ${event.platformClassName}`}
            >
              {event.platform}
            </div>
            <p className="truncate text-[12px] text-app-text-primary">{event.title}</p>
            <p className={`text-[11px] font-semibold ${event.statusClassName}`}>{event.status}</p>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-app-primary/35 px-4 py-2.5 text-sm font-semibold text-app-primary"
      >
        Buat Konten Baru
        <ArrowRight className="h-4 w-4" />
      </button>
    </section>
  );
}
