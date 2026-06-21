import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
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

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconClassName,
  trend,
  scoreLabel,
  scorePercent,
  positive = true,
}: StatCardProps) {
  const max = Math.max(...trend);
  const min = Math.min(...trend);
  const points = trend
    .map((point, index) => {
      const x = (index / (trend.length - 1)) * 100;
      const y = max === min ? 50 : ((max - point) / (max - min)) * 60 + 20;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <article className="rounded-2xl border border-app-border bg-app-surface p-3.5 shadow-[0_6px_18px_rgba(26,33,52,0.05)]">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <div className={cn("flex h-7 w-7 items-center justify-center rounded-full", iconClassName)}>
            <Icon className="h-3.5 w-3.5" />
          </div>
          <p className="truncate text-[11px] font-medium text-app-text-secondary">{title}</p>
        </div>
        {scoreLabel ? (
          <span className="rounded-full bg-app-primary/10 px-2 py-0.5 text-xs font-medium text-app-primary">
            {scoreLabel}
          </span>
        ) : null}
      </div>

      <p className="mt-2.5 text-[31px] font-semibold leading-none tracking-[-0.025em] text-app-text-primary xl:text-[34px] 2xl:text-[37px]">
        {value}
      </p>
      <p
        className={cn(
          "mt-2 text-[11px] font-semibold leading-tight xl:whitespace-nowrap",
          positive ? "text-emerald-600" : "text-red-500",
        )}
      >
        {change}
      </p>

      {scoreLabel ? (
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-app-border">
          <div className="h-full rounded-full bg-app-primary" style={{ width: `${Math.min(Math.max(scorePercent ?? 84, 0), 100)}%` }} />
        </div>
      ) : (
        <svg className="mt-2.5 h-8 w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
            className="text-app-primary"
          />
        </svg>
      )}
    </article>
  );
}
