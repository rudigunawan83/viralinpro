import {
  CalendarDays,
  Check,
  FileText,
  Hash,
  Image,
  Lightbulb,
  Plus,
  Sparkles,
  Tv,
  Video,
  WandSparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type PlatformItem = {
  label: string;
  short: string;
  active?: boolean;
};

const platforms: PlatformItem[] = [
  { label: "TikTok", short: "T", active: true },
  { label: "Instagram", short: "I" },
  { label: "YouTube", short: "Y" },
  { label: "Facebook", short: "F" },
  { label: "X (Twitter)", short: "X" },
];

const contentTypes = [
  {
    title: "Video Pendek",
    desc: "Konten video 15-60 detik untuk engagement tinggi",
    icon: Video,
    active: true,
  },
  {
    title: "Carousel",
    desc: "Konten multi-slide untuk edukasi & informasi",
    icon: FileText,
  },
  {
    title: "Gambar",
    desc: "Konten visual tunggal yang menarik",
    icon: Image,
  },
  {
    title: "Story",
    desc: "Konten sementara untuk interaksi cepat",
    icon: CalendarDays,
  },
  {
    title: "Reel",
    desc: "Video kreatif untuk meningkatkan reach",
    icon: Tv,
  },
  {
    title: "Live / Streaming",
    desc: "Konten live untuk interaksi real-time",
    icon: WandSparkles,
  },
];

const ideaChips = [
  "Cara meningkatkan followers",
  "Strategi konten viral",
  "Tips editing video",
  "Ide konten hari ini",
  "Analisis tren terbaru",
];

const aiBlocks = [
  {
    title: "Ide Konten",
    desc: "Dapatkan ide konten berdasarkan topik Anda",
    icon: Lightbulb,
  },
  {
    title: "Script / Naskah",
    desc: "Buat naskah menarik dan siap digunakan",
    icon: FileText,
  },
  {
    title: "Hook / Pembuka",
    desc: "Buat hook yang menarik perhatian audiens",
    icon: Sparkles,
  },
  {
    title: "Hashtag",
    desc: "Rekomendasi hashtag terbaik untuk konten",
    icon: Hash,
  },
];

export default function BuatKontenPage() {
  return (
    <div className="space-y-4">
      <section className="rounded-xl border border-app-border/50 bg-app-surface/70 px-4 py-3 shadow-sm">
        <h1 className="text-2xl font-bold text-app-text-primary">Buat Konten</h1>
        <p className="mt-1 text-xs text-app-text-secondary">Dashboard &gt; Buat Konten</p>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-app-border/50 pt-3">
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-app-primary/30 bg-app-primary/10 px-3 py-1.5 text-xs font-semibold text-app-primary">
            <Plus className="h-3.5 w-3.5" />
            Buat Baru
          </button>
          <button className="rounded-lg border border-app-border/60 px-3 py-1.5 text-xs font-semibold text-app-text-secondary hover:bg-app-background">
            Dari Ide
          </button>
          <button className="rounded-lg border border-app-border/60 px-3 py-1.5 text-xs font-semibold text-app-text-secondary hover:bg-app-background">
            Optimasi AI
          </button>
          <button className="rounded-lg border border-app-border/60 px-3 py-1.5 text-xs font-semibold text-app-text-secondary hover:bg-app-background">
            Dari Konten Lama
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.25fr_1fr]">
        <div className="space-y-4">
          <article className="rounded-xl border border-app-border/50 bg-app-surface p-4 shadow-sm">
            <h2 className="text-xl font-bold text-app-text-primary">1. Pilih Platform</h2>
            <p className="text-xs text-app-text-secondary">Pilih platform untuk membuat konten</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {platforms.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={cn(
                    "rounded-xl border px-3 py-3 text-left transition",
                    item.active
                      ? "border-app-primary bg-app-primary/10 shadow-sm"
                      : "border-app-border/60 hover:border-app-primary/30 hover:bg-app-background",
                  )}
                >
                  <div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-app-surface text-xs font-bold text-app-text-primary shadow-sm">
                    {item.short}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-app-text-primary">{item.label}</p>
                </button>
              ))}
            </div>

            <h2 className="mt-5 text-xl font-bold text-app-text-primary">2. Pilih Tipe Konten</h2>
            <p className="text-xs text-app-text-secondary">Tentukan tipe konten yang ingin dibuat</p>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {contentTypes.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className={cn(
                    "rounded-xl border px-3 py-3 text-left transition",
                    item.active
                      ? "border-app-primary bg-app-primary/10"
                      : "border-app-border/60 hover:border-app-primary/30 hover:bg-app-background",
                  )}
                >
                  <item.icon className="h-4 w-4 text-app-primary" />
                  <p className="mt-2 text-sm font-semibold text-app-text-primary">{item.title}</p>
                  <p className="mt-1 text-xs text-app-text-secondary">{item.desc}</p>
                </button>
              ))}
            </div>

            <h2 className="mt-5 text-xl font-bold text-app-text-primary">3. Topik / Ide Konten</h2>
            <p className="text-xs text-app-text-secondary">Masukkan topik atau ide konten yang ingin dibuat</p>
            <div className="mt-3 rounded-xl border border-app-border/60 p-3">
              <textarea
                className="h-24 w-full resize-none bg-transparent text-sm text-app-text-primary outline-none placeholder:text-app-text-secondary"
                placeholder="Contoh: Tips meningkatkan engagement di TikTok..."
              />
              <p className="text-right text-[11px] text-app-text-secondary">0/500</p>
            </div>
            <p className="mt-3 text-xs font-semibold text-app-text-secondary">Inspirasi Populer</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {ideaChips.map((chip) => (
                <button
                  key={chip}
                  className="rounded-md border border-app-border/60 px-2.5 py-1 text-[11px] font-medium text-app-text-secondary hover:bg-app-background"
                >
                  {chip}
                </button>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-app-border/50 bg-app-surface p-4 shadow-sm">
            <button className="flex w-full items-center justify-between text-left">
              <div>
                <p className="text-base font-bold text-app-text-primary">Pengaturan Tambahan</p>
                <p className="text-xs text-app-text-secondary">Atur nada, bahasa, durasi, dan preferensi konten Anda</p>
              </div>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-app-border text-app-text-secondary">
                <Plus className="h-3.5 w-3.5" />
              </span>
            </button>
          </article>
        </div>

        <div className="space-y-4">
          <article className="rounded-xl border border-app-border/50 bg-app-surface p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-app-text-primary">4. Asisten AI</h2>
              <span className="rounded-full bg-app-primary/10 px-2 py-0.5 text-[10px] font-semibold text-app-primary">Beta</span>
            </div>
            <p className="text-xs text-app-text-secondary">AI akan membantu membuat ide, script, dan struktur konten</p>

            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {aiBlocks.map((item) => (
                <button
                  key={item.title}
                  className="rounded-xl border border-app-border/60 p-3 text-left hover:border-app-primary/30 hover:bg-app-background"
                >
                  <item.icon className="h-4 w-4 text-app-primary" />
                  <p className="mt-2 text-sm font-semibold text-app-text-primary">{item.title}</p>
                  <p className="mt-1 text-xs text-app-text-secondary">{item.desc}</p>
                </button>
              ))}
            </div>

            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-app-primary to-app-accent px-4 py-3 text-sm font-semibold text-white shadow-md shadow-app-primary/30">
              <Sparkles className="h-4 w-4" />
              Generate dengan AI
            </button>
          </article>

          <article className="rounded-xl border border-app-border/50 bg-app-surface p-4 shadow-sm">
            <h2 className="text-xl font-bold text-app-text-primary">5. Preview Hasil</h2>
            <p className="text-xs text-app-text-secondary">Preview konten yang dihasilkan AI</p>

            <div className="mt-3 flex h-[320px] flex-col items-center justify-center rounded-xl border border-dashed border-app-border/70 bg-app-background/50 text-center">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-app-surface shadow-sm">
                <FileText className="h-5 w-5 text-app-text-secondary" />
              </div>
              <p className="mt-4 text-sm font-semibold text-app-text-primary">Hasil konten akan muncul di sini</p>
              <p className="mt-1 max-w-[260px] text-xs text-app-text-secondary">
                Lengkapi langkah di samping dan klik &quot;Generate dengan AI&quot; untuk melihat hasil.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-2 rounded-xl border border-app-border/50 bg-app-surface p-3 shadow-sm sm:flex-row sm:items-center sm:justify-end">
        <button className="rounded-lg border border-app-border/60 px-5 py-2 text-sm font-semibold text-app-text-secondary hover:bg-app-background">
          Simpan Draft
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-app-primary to-app-accent px-5 py-2 text-sm font-semibold text-white shadow-md shadow-app-primary/30">
          <Check className="h-4 w-4" />
          Buat Konten
        </button>
      </section>
    </div>
  );
}
