import { Rocket, Sparkles } from "lucide-react";

type AIRecommendationProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
};

export function AIRecommendation({
  title = "Rekomendasi AI untuk Anda",
  description = "Coba buat konten dengan topik AI tips promosi di TikTok karena topik ini sedang trending.",
  ctaLabel = "Buat Konten Sekarang",
}: AIRecommendationProps) {
  return (
    <section className="flex flex-col gap-4 rounded-xl border border-app-primary/20 bg-gradient-to-r from-app-primary/5 via-app-accent/5 to-app-primary/5 p-4 shadow-sm transition hover:shadow-md hover:border-app-primary/40 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-app-primary/20 text-app-primary shadow-md">
          <Rocket className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[13px] font-bold text-app-text-primary">{title}</p>
          <p className="text-[12px] text-app-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-app-primary to-app-accent px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-app-primary/30 transition hover:shadow-lg hover:scale-105"
      >
        {ctaLabel}
        <Sparkles className="h-4 w-4" />
      </button>
    </section>
  );
}
