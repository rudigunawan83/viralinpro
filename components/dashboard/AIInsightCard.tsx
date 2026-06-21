import { ArrowRight, Sparkles } from "lucide-react";

export function AIInsightCard() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6044ff] via-[#6d5ef9] to-[#7f56ff] p-4 text-white shadow-[0_10px_28px_rgba(78,52,210,0.32)]">
      <span className="absolute right-[-30px] top-[-20px] h-24 w-24 rounded-full bg-white/15 blur-2xl" />
      <span className="absolute bottom-[-20px] right-[130px] h-16 w-16 rounded-full bg-white/10 blur-xl" />

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            Insight AI Hari Ini
            <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[10px]">AI</span>
          </div>
          <p className="mt-3 max-w-[330px] text-[13px] leading-relaxed text-white/90">
            Konten video tutorial berdurasi 20-30 detik sedang mendapatkan performa 42% lebih tinggi dibanding
            jenis konten lainnya di niche Anda.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-app-primary"
          >
            Lihat Rekomendasi
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative hidden h-24 w-24 items-center justify-center sm:flex">
          <span className="absolute h-24 w-24 rounded-full bg-white/25" />
          <span className="absolute h-20 w-20 rounded-full bg-gradient-to-b from-[#34344f] to-[#161a2f]" />
          <span className="absolute left-2 top-8 h-5 w-5 rounded-full border border-white/50 bg-white/20" />
          <span className="absolute right-2 top-8 h-5 w-5 rounded-full border border-white/50 bg-white/20" />
          <span className="absolute h-9 w-12 rounded-full bg-[#1f2340]" />
          <span className="absolute left-[36px] top-[46px] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(45,212,191,0.9)]" />
          <span className="absolute right-[36px] top-[46px] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(45,212,191,0.9)]" />
        </div>
      </div>
    </section>
  );
}
