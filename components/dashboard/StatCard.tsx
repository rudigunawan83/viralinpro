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
    <article className="group rounded-xl border border-app-border/50 bg-gradient-to-br from-app-surface via-app-surface to-app-surface/50 p-4 shadow-md shadow-app-primary/5 transition hover:shadow-lg hover:shadow-app-primary/15 hover:border-app-border/80">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg shadow-md transition group-hover:scale-110", iconClassName)}>
            <Icon className="h-4 w-4" />
          </div>
          <p className="truncate text-[12px] font-semibold text-app-text-secondary">{title}</p>
        </div>
        {scoreLabel ? (
          <span className="rounded-full bg-app-primary/15 px-2.5 py-1 text-xs font-bold text-app-primary shadow-sm">
            {scoreLabel}
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-[32px] font-bold leading-none tracking-[-0.025em] text-app-text-primary xl:text-[36px] 2xl:text-[40px]">
        {value}
      </p>
      <p
        className={cn(
          "mt-2 text-[12px] font-bold leading-tight xl:whitespace-nowrap",
          positive ? "text-emerald-600 dark:text-emerald-400" : "text-red-500 dark:text-red-400",
        )}
      >
        {change}
      </p>

      {scoreLabel ? (
        <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-app-border/50">
          <div className="h-full rounded-full bg-gradient-to-r from-app-primary to-app-accent shadow-sm shadow-app-primary/30 transition-all duration-500" style={{ width: `${Math.min(Math.max(scorePercent ?? 84, 0), 100)}%` }} />
        </div>
      ) : (
        <svg className="mt-3 h-9 w-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
            className="text-app-primary opacity-75 transition group-hover:opacity-100"
          />
        </svg>
      )}
    </article>
  );
}
