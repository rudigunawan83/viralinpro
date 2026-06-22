import { Sparkles } from "lucide-react";

export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="rounded-xl border border-app-border/50 bg-gradient-to-br from-app-surface via-app-surface to-app-surface/50 p-8 shadow-md shadow-app-primary/5">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-app-primary/20 text-app-primary shadow-md">
        <Sparkles className="h-5 w-5" />
      </div>
      <h1 className="text-3xl font-bold text-app-text-primary">{title}</h1>
      <p className="mt-3 max-w-xl text-sm text-app-text-secondary leading-relaxed">{description}</p>
      <p className="mt-8 text-sm text-app-text-secondary">
        ✨ Halaman ini sudah disiapkan dan siap kita kembangkan bertahap sesuai perintah Anda berikutnya.
      </p>
    </section>
  );
}
