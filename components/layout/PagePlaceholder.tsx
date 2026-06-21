import { Sparkles } from "lucide-react";

export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="rounded-2xl border border-app-border bg-app-surface p-8 shadow-sm">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-app-primary/10 text-app-primary">
        <Sparkles className="h-5 w-5" />
      </div>
      <h1 className="text-2xl font-semibold text-app-text-primary">{title}</h1>
      <p className="mt-2 max-w-xl text-sm text-app-text-secondary">{description}</p>
      <p className="mt-8 text-sm text-app-text-secondary">
        Halaman ini sudah disiapkan dan siap kita kembangkan bertahap sesuai perintah Anda berikutnya.
      </p>
    </section>
  );
}
