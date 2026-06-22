import { Eye, Heart, MessageCircle } from "lucide-react";

export type TopContentItem = {
  title: string;
  platform: string;
  date: string;
  rank: string;
  views: string;
  likes: string;
  comments: string;
  gradient: string;
};

const defaultContentItems: TopContentItem[] = [
  {
    title: "5 Cara Meningkatkan Produktivitas",
    platform: "TikTok",
    date: "3 Mei 2025",
    rank: "#1",
    views: "324.6K",
    likes: "18.7K",
    comments: "1.2K",
    gradient: "from-[#111827] via-[#1F2937] to-[#4B5563]",
  },
  {
    title: "Tips Foto Produk Pakai HP",
    platform: "Instagram",
    date: "2 Mei 2025",
    rank: "#2",
    views: "201.3K",
    likes: "14.6K",
    comments: "892",
    gradient: "from-[#EF4444] via-[#F97316] to-[#EAB308]",
  },
  {
    title: "Strategi Content Plan yang Efektif",
    platform: "YouTube",
    date: "30 Apr 2025",
    rank: "#3",
    views: "186.9K",
    likes: "9.7K",
    comments: "736",
    gradient: "from-[#1E3A8A] via-[#2563EB] to-[#38BDF8]",
  },
  {
    title: "Ide Konten untuk UMKM",
    platform: "Facebook",
    date: "1 Mei 2025",
    rank: "#4",
    views: "151.2K",
    likes: "6.2K",
    comments: "512",
    gradient: "from-[#0F172A] via-[#334155] to-[#64748B]",
  },
];

type TopContentProps = {
  items?: TopContentItem[];
};

export function TopContent({ items = defaultContentItems }: TopContentProps) {
  return (
    <section className="rounded-xl border border-app-border/50 bg-gradient-to-br from-app-surface via-app-surface to-app-surface/50 p-5 shadow-md shadow-app-primary/5 transition hover:shadow-lg hover:shadow-app-primary/10">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-[28px] font-bold tracking-[-0.025em] text-app-text-primary">Konten Terbaik</h2>
          <span className="text-xs text-app-text-secondary">i</span>
        </div>
        <button type="button" className="inline-flex items-center rounded-lg bg-app-primary/15 px-3 py-1.5 text-xs font-bold text-app-primary transition hover:bg-app-primary/25">
          Lihat Semua
        </button>
      </div>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        <button className="rounded-lg bg-gradient-to-r from-app-primary to-app-accent px-3.5 py-1.5 text-xs font-bold text-white shadow-md shadow-app-primary/30 flex-shrink-0">Tayangan</button>
        <button className="rounded-lg border border-app-border/50 bg-app-surface/50 px-3.5 py-1.5 text-xs font-semibold text-app-text-secondary transition hover:bg-app-surface flex-shrink-0">Interaksi</button>
        <button className="rounded-lg border border-app-border/50 bg-app-surface/50 px-3.5 py-1.5 text-xs font-semibold text-app-text-secondary transition hover:bg-app-surface flex-shrink-0">Komentar</button>
        <button className="rounded-lg border border-app-border/50 bg-app-surface/50 px-3.5 py-1.5 text-xs font-semibold text-app-text-secondary transition hover:bg-app-surface flex-shrink-0">Bagikan</button>
      </div>

      <div className="grid gap-3 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-lg border border-app-border/50 bg-app-surface/50 transition hover:border-app-primary/30 hover:shadow-lg hover:shadow-app-primary/10">
            <div className={`relative h-28 bg-gradient-to-br ${item.gradient} p-3 text-white transition group-hover:shadow-md`}>
              <span className="absolute right-2 top-2 rounded-md bg-black/40 px-2 py-1 text-xs font-bold backdrop-blur">
                {item.rank}
              </span>
              <p className="mt-7 text-sm font-bold leading-snug line-clamp-2">{item.title}</p>
            </div>
            <div className="p-3">
              <p className="text-xs text-app-text-secondary font-medium">
                {item.platform} • {item.date}
              </p>
              <div className="mt-2.5 flex items-center gap-3 text-xs text-app-text-secondary">
                <span className="inline-flex items-center gap-1 hover:text-app-primary transition">
                  <Eye className="h-3.5 w-3.5" />
                  {item.views}
                </span>
                <span className="inline-flex items-center gap-1 hover:text-red-500 transition">
                  <Heart className="h-3.5 w-3.5" />
                  {item.likes}
                </span>
                <span className="inline-flex items-center gap-1 hover:text-app-primary transition">
                  <MessageCircle className="h-3.5 w-3.5" />
                  {item.comments}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
