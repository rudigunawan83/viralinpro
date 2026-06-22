import { ArrowRight, Sparkles } from "lucide-react";

type AIInsightCardProps = {
  title?: string;
  description?: string;
  recommendation?: string;
};

export function AIInsightCard({
  title = "Insight AI Hari Ini",
  description = "Konten video tutorial berdurasi 20-30 detik sedang mendapatkan performa 42% lebih tinggi dibanding jenis konten lainnya di niche Anda.",
  recommendation = "Lihat Rekomendasi",
}: AIInsightCardProps) {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-app-primary via-app-secondary to-app-accent p-5 text-white shadow-lg shadow-app-primary/40">
      <span className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <span className="absolute bottom-[-30px] right-[100px] h-20 w-20 rounded-full bg-white/5 blur-2xl" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold backdrop-blur">
            <Sparkles className="h-4 w-4" />
            {title}
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold">AI</span>
          </div>
          <p className="mt-4 max-w-[350px] text-[14px] leading-relaxed text-white/95">
            {description}
          </p>
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-app-primary shadow-lg shadow-white/20 transition hover:shadow-xl hover:scale-105"
          >
            {recommendation}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative hidden h-28 w-28 items-center justify-center sm:flex">
          <span className="absolute h-28 w-28 rounded-full bg-white/20 blur-sm" />
          <span className="absolute h-24 w-24 rounded-full bg-gradient-to-b from-app-primary/50 to-app-accent/30" />
          <span className="absolute left-3 top-10 h-5 w-5 rounded-full border border-white/60 bg-white/25" />
          <span className="absolute right-3 top-10 h-5 w-5 rounded-full border border-white/60 bg-white/25" />
          <span className="absolute h-10 w-14 rounded-full bg-app-primary/40" />
          <span className="absolute left-10 top-14 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/60" />
          <span className="absolute right-10 top-14 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/60" />
        </div>
      </div>
    </section>
  );
}
