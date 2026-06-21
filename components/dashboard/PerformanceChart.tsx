"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartKey = "tayangan" | "interaksi" | "komentar" | "bagikan";

export type PerformanceChartPoint = {
  date: string;
  tayangan: number;
  interaksi: number;
  komentar: number;
  bagikan: number;
};

const defaultChartData: PerformanceChartPoint[] = [
  { date: "1 Mei", tayangan: 70000, interaksi: 18000, komentar: 4200, bagikan: 5200 },
  { date: "2 Mei", tayangan: 158000, interaksi: 26500, komentar: 6800, bagikan: 7600 },
  { date: "3 Mei", tayangan: 102000, interaksi: 21400, komentar: 5400, bagikan: 5900 },
  { date: "4 Mei", tayangan: 148000, interaksi: 28600, komentar: 7200, bagikan: 8100 },
  { date: "5 Mei", tayangan: 301000, interaksi: 43600, komentar: 10400, bagikan: 12600 },
  { date: "6 Mei", tayangan: 248000, interaksi: 37100, komentar: 9300, bagikan: 10900 },
  { date: "7 Mei", tayangan: 152000, interaksi: 22900, komentar: 6100, bagikan: 6800 },
];

const tabs: Array<{ key: ChartKey; label: string }> = [
  { key: "tayangan", label: "Tayangan" },
  { key: "interaksi", label: "Interaksi" },
  { key: "komentar", label: "Komentar" },
  { key: "bagikan", label: "Bagikan" },
];

const formatByTab: Record<ChartKey, (value: number) => string> = {
  tayangan: (value) => `${(value / 1000).toFixed(0)}K`,
  interaksi: (value) => `${(value / 1000).toFixed(1)}K`,
  komentar: (value) => `${(value / 1000).toFixed(1)}K`,
  bagikan: (value) => `${(value / 1000).toFixed(1)}K`,
};

type PerformanceChartProps = {
  data?: PerformanceChartPoint[];
};

export function PerformanceChart({ data = defaultChartData }: PerformanceChartProps) {
  const [activeTab, setActiveTab] = useState<ChartKey>("tayangan");

  const yAxisFormatter = useMemo(() => formatByTab[activeTab], [activeTab]);
  const activeTabLabel = tabs.find((tab) => tab.key === activeTab)?.label ?? "Data";

  return (
    <section className="rounded-2xl border border-app-border bg-app-surface p-4 shadow-[0_6px_18px_rgba(26,33,52,0.05)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-[31px] font-semibold tracking-[-0.025em] text-app-text-primary">Performa Konten</h2>
          <Info className="h-4 w-4 text-app-text-secondary" />
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-app-border bg-app-background px-3 py-1.5 text-xs font-medium text-app-text-secondary"
        >
          Semua Platform
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-full px-3 py-1 text-[11px] font-medium transition ${
              activeTab === tab.key
                ? "bg-app-primary text-white"
                : "border border-app-border bg-app-background text-app-text-secondary hover:text-app-text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 h-[266px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 10, left: -22, bottom: 0 }}>
            <defs>
              <linearGradient id="viralinChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6D5EF9" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#6D5EF9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 6" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              tickFormatter={yAxisFormatter}
              width={44}
            />
            <Tooltip
              cursor={{ stroke: "#6D5EF9", strokeWidth: 1, strokeDasharray: "4 4" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
              }}
              formatter={(value) => [yAxisFormatter(Number(value ?? 0)), activeTabLabel]}
            />
            <Area
              type="monotone"
              dataKey={activeTab}
              stroke="#6D5EF9"
              fill="url(#viralinChartFill)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5, fill: "#6D5EF9", stroke: "#FFFFFF", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
