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
    <section className="rounded-2xl border border-app-border bg-app-surface p-4 shadow-[0_6px_18px_rgba(26,33,52,0.05)]">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-[30px] font-semibold tracking-[-0.025em] text-app-text-primary">Konten Terbaik</h2>
          <span className="text-xs text-app-text-secondary">i</span>
        </div>
        <button type="button" className="inline-flex items-center rounded-full bg-app-primary/10 px-3 py-1 text-[11px] font-semibold text-app-primary">
          Lihat Semua
        </button>
      </div>

      <div className="mb-3 flex gap-2">
        <button className="rounded-full bg-app-primary px-3 py-1 text-[11px] font-semibold text-white">Tayangan</button>
        <button className="rounded-full border border-app-border px-3 py-1 text-[11px] font-medium text-app-text-secondary">Interaksi</button>
        <button className="rounded-full border border-app-border px-3 py-1 text-[11px] font-medium text-app-text-secondary">Komentar</button>
        <button className="rounded-full border border-app-border px-3 py-1 text-[11px] font-medium text-app-text-secondary">Bagikan</button>
      </div>

      <div className="grid gap-2.5 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.title} className="rounded-xl border border-app-border bg-app-background p-2">
            <div className={`relative h-24 rounded-lg bg-gradient-to-br ${item.gradient} p-3 text-white`}>
              <span className="absolute right-2 top-2 rounded-md bg-black/30 px-1.5 py-0.5 text-[10px] font-medium">
                {item.rank}
              </span>
              <p className="mt-5 text-[13px] font-semibold leading-tight">{item.title}</p>
            </div>
            <p className="mt-2 text-[10px] text-app-text-secondary">
              {item.platform} - {item.date}
            </p>
            <div className="mt-2 flex items-center gap-2.5 text-[10px] text-app-text-secondary">
              <span className="inline-flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {item.views}
              </span>
              <span className="inline-flex items-center gap-1">
                <Heart className="h-3 w-3" />
                {item.likes}
              </span>
              <span className="inline-flex items-center gap-1">
                <MessageCircle className="h-3 w-3" />
                {item.comments}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
