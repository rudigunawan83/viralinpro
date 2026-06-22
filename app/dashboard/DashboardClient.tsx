"use client";

import { useEffect, useMemo, useState } from "react";
import { AIInsightCard } from "@/components/dashboard/AIInsightCard";
import { AIRecommendation } from "@/components/dashboard/AIRecommendation";
import type { PerformanceChartPoint } from "@/components/dashboard/PerformanceChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { TodayCalendar, type TodayCalendarEvent } from "@/components/dashboard/TodayCalendar";
import type { TopContentItem } from "@/components/dashboard/TopContent";
import { TopContent } from "@/components/dashboard/TopContent";
import {
  fetchDashboardHome,
  type DashboardHomePayload,
  type DashboardTopContentItem,
  type DashboardTodayScheduleItem,
} from "@/lib/dashboard-api";
import type { LucideIcon } from "lucide-react";
import { Bot, CalendarPlus, ChevronDown, Eye, UserPlus, Users } from "lucide-react";
import dynamic from "next/dynamic";

const PerformanceChart = dynamic(
  () => import("@/components/dashboard/PerformanceChart").then((mod) => mod.PerformanceChart),
  {
    ssr: false,
    loading: () => <div className="h-[360px] animate-pulse rounded-2xl border border-app-border bg-app-surface" />,
  },
);

type StatCardViewModel = {
  key: string;
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  iconClassName: string;
  trend: number[];
  scoreLabel?: string;
  scorePercent?: number;
  positive?: boolean;
};

const defaultStats: StatCardViewModel[] = [
  {
    key: "total_tayangan",
    title: "Total Tayangan",
    value: "1.248.750",
    change: "+24.6% dari minggu lalu",
    icon: Eye,
    iconClassName: "bg-violet-100 text-violet-600",
    trend: [14, 18, 16, 22, 19, 24, 22, 27],
  },
  {
    key: "interaksi",
    title: "Interaksi",
    value: "86.350",
    change: "+18.7% dari minggu lalu",
    icon: Users,
    iconClassName: "bg-emerald-100 text-emerald-600",
    trend: [7, 10, 8, 12, 10, 9, 10, 11],
  },
  {
    key: "pengikut_baru",
    title: "Pengikut Baru",
    value: "2.753",
    change: "+31.4% dari minggu lalu",
    icon: UserPlus,
    iconClassName: "bg-blue-100 text-blue-600",
    trend: [3, 4, 3, 5, 4, 4, 5, 6],
  },
  {
    key: "konten_dipublikasikan",
    title: "Konten Dipublikasikan",
    value: "24",
    change: "+14.3% dari minggu lalu",
    icon: CalendarPlus,
    iconClassName: "bg-orange-100 text-orange-500",
    trend: [1, 3, 2, 5, 4, 6, 5, 7],
  },
  {
    key: "skor_performa_ai",
    title: "Skor Performa AI",
    value: "87/100",
    change: "Sangat Baik",
    icon: Bot,
    iconClassName: "bg-fuchsia-100 text-fuchsia-600",
    trend: [10, 10, 10, 10, 10, 10, 10, 10],
    scoreLabel: "Sangat Baik",
    scorePercent: 87,
  },
];

const defaultChartData: PerformanceChartPoint[] = [
  { date: "1 Mei", tayangan: 70000, interaksi: 18000, komentar: 4200, bagikan: 5200 },
  { date: "2 Mei", tayangan: 158000, interaksi: 26500, komentar: 6800, bagikan: 7600 },
  { date: "3 Mei", tayangan: 102000, interaksi: 21400, komentar: 5400, bagikan: 5900 },
  { date: "4 Mei", tayangan: 148000, interaksi: 28600, komentar: 7200, bagikan: 8100 },
  { date: "5 Mei", tayangan: 301000, interaksi: 43600, komentar: 10400, bagikan: 12600 },
  { date: "6 Mei", tayangan: 248000, interaksi: 37100, komentar: 9300, bagikan: 10900 },
  { date: "7 Mei", tayangan: 152000, interaksi: 22900, komentar: 6100, bagikan: 6800 },
];

const defaultTopContent: TopContentItem[] = [
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

const topContentGradients = [
  "from-[#111827] via-[#1F2937] to-[#4B5563]",
  "from-[#EF4444] via-[#F97316] to-[#EAB308]",
  "from-[#1E3A8A] via-[#2563EB] to-[#38BDF8]",
  "from-[#0F172A] via-[#334155] to-[#64748B]",
];

function normalizeKey(value?: string) {
  return (value ?? "").toLowerCase().replace(/\s+/g, "_");
}

function formatMetric(value: number): string {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return new Intl.NumberFormat("id-ID").format(value);
}

function formatCompactMetric(value: number): string {
  if (!Number.isFinite(value)) {
    return "0";
  }

  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }

  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }

  return String(value);
}

function mapPerformanceSeries(data?: DashboardHomePayload): PerformanceChartPoint[] {
  const labels = data?.charts?.labels ?? [];
  const views = data?.charts?.views ?? [];
  const engagement = data?.charts?.engagement ?? [];

  if (!labels.length) {
    return defaultChartData;
  }

  return labels.map((label, index) => ({
    date: label,
    tayangan: Number(views[index] ?? 0),
    interaksi: Number(engagement[index] ?? 0),
    komentar: Math.round(Number(engagement[index] ?? 0) * 0.24),
    bagikan: Math.round(Number(engagement[index] ?? 0) * 0.18),
  }));
}

function mapTopContent(items?: DashboardTopContentItem[]): TopContentItem[] {
  if (!items?.length) {
    return defaultTopContent;
  }

  return items.map((item, index) => ({
    title: item.title || `Konten #${index + 1}`,
    platform: item.platform || "Unknown",
    date: item.date || "-",
    rank: item.rank || `#${index + 1}`,
    views: typeof item.views === "number" ? formatCompactMetric(item.views) : (item.views ?? "0"),
    likes: typeof item.likes === "number" ? formatCompactMetric(item.likes) : (item.likes ?? "0"),
    comments: typeof item.comments === "number" ? formatCompactMetric(item.comments) : (item.comments ?? "0"),
    gradient: item.gradient || topContentGradients[index % topContentGradients.length],
  }));
}

function mapSummaryToStats(data?: DashboardHomePayload): StatCardViewModel[] {
  const summary = data?.summary;

  if (!summary) {
    return defaultStats;
  }

  const growthRate = Number(summary.growthRate ?? 0);
  const aiScore = Math.min(100, Math.max(0, Number(summary.aiCreditsRemaining ?? 0)));

  return defaultStats.map((item) => {
    const normalized = normalizeKey(item.title);

    if (normalized.includes("tayangan")) {
      return {
        ...item,
        value: formatMetric(Number(summary.views ?? 0)),
        change: `${growthRate >= 0 ? "+" : ""}${growthRate.toFixed(1)}% dari periode lalu`,
        positive: growthRate >= 0,
      };
    }

    if (normalized.includes("interaksi")) {
      const engagement = Number(summary.engagement ?? 0);
      return {
        ...item,
        value: formatMetric(engagement),
        change: `${growthRate >= 0 ? "+" : ""}${(growthRate * 0.82).toFixed(1)}% dari periode lalu`,
        positive: growthRate >= 0,
      };
    }

    if (normalized.includes("pengikut")) {
      return {
        ...item,
        value: formatMetric(Number(summary.followers ?? 0)),
        change: `${growthRate >= 0 ? "+" : ""}${(growthRate * 0.66).toFixed(1)}% dari periode lalu`,
        positive: growthRate >= 0,
      };
    }

    if (normalized.includes("dipublikasikan")) {
      return {
        ...item,
        value: formatMetric(Number(summary.publishedPosts ?? 0)),
        change: `${formatMetric(Number(summary.scheduledPosts ?? 0))} terjadwal`,
        positive: true,
      };
    }

    if (normalized.includes("skor_performa_ai") || normalized.includes("skor_performa")) {
      return {
        ...item,
        value: `${aiScore}/100`,
        scoreLabel: aiScore >= 75 ? "Sangat Baik" : aiScore >= 50 ? "Cukup" : "Perlu Optimasi",
        scorePercent: aiScore,
        change: `Sisa kredit AI ${formatMetric(Number(summary.aiCreditsRemaining ?? 0))}`,
      };
    }

    return item;
  });
}

function mapTodaySchedule(items?: DashboardTodayScheduleItem[]): TodayCalendarEvent[] {
  if (!items?.length) {
    return [];
  }

  return items.map((item, index) => ({
    time: item.time || `${9 + index}:00`,
    platform: (item.platform || "?").slice(0, 1).toUpperCase(),
    title: item.title || `Konten ${index + 1}`,
    status: item.status || "Terjadwal",
  }));
}

export default function DashboardClient() {
  const [dateRangeLabel, setDateRangeLabel] = useState("30 hari terakhir");
  const [stats, setStats] = useState<StatCardViewModel[]>(defaultStats);
  const [chartData, setChartData] = useState<PerformanceChartPoint[]>(defaultChartData);
  const [topContent, setTopContent] = useState<TopContentItem[]>(defaultTopContent);
  const [todaySchedule, setTodaySchedule] = useState<TodayCalendarEvent[]>([]);
  const [insight, setInsight] = useState({
    title: "Insight AI Hari Ini",
    description:
      "Konten video tutorial berdurasi 20-30 detik sedang mendapatkan performa 42% lebih tinggi dibanding jenis konten lainnya di niche Anda.",
    recommendation: "Lihat Rekomendasi",
  });
  const [recommendationText, setRecommendationText] = useState(
    "Coba buat konten dengan topik AI tips promosi di TikTok karena topik ini sedang trending.",
  );
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadDashboard() {
      try {
        const response = await fetchDashboardHome({
          range: "30d",
          platform: "all",
          refresh: false,
        });

        if (!response.success || !response.data) {
          throw new Error(response.message || "Gagal memuat dashboard.");
        }

        if (!isMounted) {
          return;
        }

        setDateRangeLabel("30 hari terakhir");
        setStats(mapSummaryToStats(response.data));
        setChartData(mapPerformanceSeries(response.data));
        setTopContent(mapTopContent(response.data.topContent));
        setTodaySchedule(mapTodaySchedule(response.data.todaySchedule));
        setInsight({
          title: response.data.aiInsight?.title || "Insight AI Hari Ini",
          description:
            response.data.aiInsight?.description ||
            "Konten video tutorial berdurasi 20-30 detik sedang mendapatkan performa 42% lebih tinggi dibanding jenis konten lainnya di niche Anda.",
          recommendation: response.data.aiInsight?.recommendation || "Lihat Rekomendasi",
        });
        setRecommendationText(
          response.data.recommendations?.[0] ||
            "Coba buat konten dengan topik AI tips promosi di TikTok karena topik ini sedang trending.",
        );
        setApiError("");
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setApiError(error instanceof Error ? error.message : "Gagal memuat data dashboard.");
        setStats(defaultStats);
        setChartData(defaultChartData);
        setTopContent(defaultTopContent);
        setTodaySchedule([]);
      }
    }

    loadDashboard();

    return () => {
      isMounted = false;
    };
  }, []);

  const showApiError = useMemo(() => Boolean(apiError), [apiError]);

  return (
    <div className="space-y-4">
      <section className="flex justify-end">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-app-border bg-app-surface px-3 py-2 text-sm font-medium text-app-text-secondary"
        >
          {dateRangeLabel}
          <ChevronDown className="h-4 w-4" />
        </button>
      </section>

      {showApiError ? (
        <section className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700">
          Data dashboard API belum tersedia, menampilkan data contoh. Detail: {apiError}
        </section>
      ) : null}

      <section className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            change={item.change}
            icon={item.icon}
            iconClassName={item.iconClassName}
            trend={item.trend}
            scoreLabel={item.scoreLabel}
            scorePercent={item.scorePercent}
            positive={item.positive}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-3 xl:grid-cols-[1.8fr_1fr]">
        <div className="space-y-4">
          <PerformanceChart data={chartData} />
          <TopContent items={topContent} />
        </div>
        <div className="space-y-4">
          <AIInsightCard
            title={insight.title}
            description={insight.description}
            recommendation={insight.recommendation}
          />
          <TodayCalendar events={todaySchedule} />
        </div>
      </section>

      <AIRecommendation description={recommendationText} />
    </div>
  );
}
