import { apiFetch } from "@/lib/api-client";

export type DashboardStatApiItem = {
  key?: string;
  title?: string;
  value?: string;
  change?: string;
  positive?: boolean;
  trend?: number[];
  scoreLabel?: string;
  scorePercent?: number;
};

export type DashboardPerformancePoint = {
  date: string;
  tayangan: number;
  interaksi: number;
  komentar: number;
  bagikan: number;
};

export type DashboardTopContentItem = {
  title: string;
  platform: string;
  date: string;
  rank: string;
  views: string;
  likes: string;
  comments: string;
  gradient?: string;
};

type DashboardOverviewResponse = {
  success: boolean;
  message: string;
  data?: {
    dateRangeLabel?: string;
    stats?: DashboardStatApiItem[];
    performance?: {
      series?: DashboardPerformancePoint[];
    };
    topContents?: DashboardTopContentItem[];
  };
};

export async function fetchDashboardOverview() {
  return apiFetch<DashboardOverviewResponse>("/api/v1/dashboard/overview");
}
