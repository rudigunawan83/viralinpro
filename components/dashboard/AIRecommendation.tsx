import { Rocket, Sparkles } from "lucide-react";

export function AIRecommendation() {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-[#d9d3ff] bg-gradient-to-r from-[#f7f4ff] to-[#f3f6ff] p-3.5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-app-primary/12 text-app-primary">
          <Rocket className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[13px] font-semibold text-app-text-primary">Rekomendasi AI untuk Anda</p>
          <p className="text-[12px] text-app-text-secondary">
            Coba buat konten dengan topik AI tips promosi di TikTok karena topik ini sedang trending.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-app-primary px-4 py-2 text-xs font-semibold text-white"
      >
        Buat Konten Sekarang
        <Sparkles className="h-4 w-4" />
      </button>
    </section>
  );
}
