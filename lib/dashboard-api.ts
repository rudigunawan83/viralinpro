import { apiFetch } from "@/lib/api-client";

export type DashboardSummary = {
  followers?: number;
  views?: number;
  engagement?: number;
  publishedPosts?: number;
  scheduledPosts?: number;
  draftPosts?: number;
  growthRate?: number;
  aiCreditsRemaining?: number;
};

export type DashboardCharts = {
  labels?: string[];
  views?: number[];
  engagement?: number[];
};

export type DashboardTopContentItem = {
  title?: string;
  platform?: string;
  date?: string;
  rank?: string;
  views?: string | number;
  likes?: string | number;
  comments?: string | number;
  gradient?: string;
};

export type DashboardTodayScheduleItem = {
  time?: string;
  platform?: string;
  title?: string;
  status?: string;
};

export type DashboardAiInsight = {
  title?: string;
  description?: string;
  recommendation?: string;
  priority?: string;
};

export type DashboardHomePayload = {
  summary?: DashboardSummary;
  charts?: DashboardCharts;
  topContent?: DashboardTopContentItem[];
  todaySchedule?: DashboardTodayScheduleItem[];
  aiInsight?: DashboardAiInsight;
  recommendations?: string[];
};

type DashboardHomeResponse = {
  success: boolean;
  message: string;
  data?: DashboardHomePayload;
};

export type DashboardHomeParams = {
  range?: "7d" | "30d" | "90d" | "1y";
  platform?: string;
  refresh?: boolean;
};

export async function fetchDashboardHome(params?: DashboardHomeParams) {
  const query = new URLSearchParams({
    range: params?.range ?? "30d",
    platform: params?.platform ?? "all",
    refresh: String(params?.refresh ?? false),
  });

  return apiFetch<DashboardHomeResponse>(`/api/v1/dashboard/home?${query.toString()}`);
}
