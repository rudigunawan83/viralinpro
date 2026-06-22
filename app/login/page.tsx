"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Bot,
  CalendarDays,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Moon,
  ShieldCheck,
  Sun,
  Users,
} from "lucide-react";
import { apiFetch } from "@/lib/api-client";
import { setAuthSession, type LoginSuccessResponse } from "@/lib/auth-storage";

type LoginRequest = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const payload: LoginRequest = {
      email,
      password,
    };

    try {
      const response = await apiFetch<LoginSuccessResponse>("/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!response.success || !response.data?.accessToken) {
        throw new Error(response.message || "Login gagal. Coba lagi.");
      }

      setAuthSession(response);
      router.replace("/dashboard");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Terjadi kesalahan saat login.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-app-background via-app-background to-app-primary/5 p-4 lg:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-40px)] max-w-[1320px] overflow-hidden rounded-2xl border border-app-border/50 bg-app-surface glass lg:grid-cols-2 shadow-2xl shadow-app-primary/20">
        <section className="relative flex flex-col justify-between bg-gradient-to-br from-app-primary/10 via-app-surface to-app-accent/5 p-8 lg:p-10">
          <div className="pointer-events-none absolute left-[-90px] top-[-110px] h-[250px] w-[250px] rounded-full bg-app-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-120px] right-[-50px] h-[260px] w-[260px] rounded-full bg-app-accent/15 blur-3xl" />
          <div>
            <div className="inline-flex items-center gap-2 text-[40px] font-bold tracking-[-0.03em] text-app-text-primary">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-app-primary to-app-accent text-white shadow-lg shadow-app-primary/40">
                <Bot className="h-5 w-5" />
              </span>
              viralin.pro
            </div>

            <h1 className="mt-10 max-w-[520px] text-[44px] font-bold leading-[1.03] tracking-[-0.03em] text-app-text-primary lg:text-[58px]">
              Kelola Konten.
              <br />
              Tumbuhkan Audiens.
              <br />
              <span className="bg-gradient-to-r from-app-primary to-app-accent bg-clip-text text-transparent">Raih Viral.</span>
            </h1>

            <p className="mt-4 max-w-[510px] text-[17px] leading-relaxed text-app-text-secondary lg:text-[20px]">
              Platform AI untuk kreator dan tim marketing dalam membuat, menganalisis, dan mengoptimalkan konten yang berdampak.
            </p>

            <div className="mt-8 max-w-[500px] space-y-3">
              <div className="flex items-start gap-3 rounded-lg bg-app-surface/50 border border-app-border/50 p-4 transition hover:bg-app-surface hover:border-app-primary/30">
                <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-app-primary/20 text-app-primary shadow-md">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[18px] font-bold text-app-text-primary">Analitik Mendalam</p>
                  <p className="text-[14px] text-app-text-secondary">Pantau performa konten secara real-time dengan insight yang akurat.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-app-surface/50 border border-app-border/50 p-4 transition hover:bg-app-surface hover:border-app-primary/30">
                <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-app-primary/20 text-app-primary shadow-md">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[18px] font-bold text-app-text-primary">AI Assistant</p>
                  <p className="text-[14px] text-app-text-secondary">Dapatkan ide konten, caption, dan strategi dengan bantuan AI.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-app-surface/50 border border-app-border/50 p-4 transition hover:bg-app-surface hover:border-app-primary/30">
                <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-app-primary/20 text-app-primary shadow-md">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[18px] font-bold text-app-text-primary">Manajemen Mudah</p>
                  <p className="text-[14px] text-app-text-secondary">Jadwalkan, publikasikan, dan kelola konten di semua platform.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 hidden h-[260px] lg:block">
            <div className="absolute left-4 top-12 h-[180px] w-[330px] rotate-[-5deg] rounded-xl border border-app-border/50 bg-app-surface/50 p-4 shadow-lg backdrop-blur">
              <p className="text-sm font-bold text-app-text-primary">Performa Konten</p>
              <div className="mt-3 h-[120px] rounded-lg bg-gradient-to-b from-app-primary/10 to-transparent" />
            </div>
            <div className="absolute left-[280px] top-0 h-[210px] w-[180px] rotate-[4deg] rounded-xl border border-app-border/50 bg-app-surface/50 p-4 shadow-lg backdrop-blur">
              <p className="text-sm font-bold text-app-text-primary">Skor Performa AI</p>
              <div className="mx-auto mt-3 flex h-24 w-24 items-center justify-center rounded-full border-4 border-app-primary text-center shadow-lg shadow-app-primary/30">
                <span className="text-4xl font-bold text-app-primary">87</span>
              </div>
              <p className="mt-3 text-center text-xs font-bold text-app-primary">Sangat Baik</p>
            </div>
            <div className="absolute right-8 top-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-app-primary to-app-accent text-white shadow-lg shadow-app-primary/40">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </section>

        <section className="relative p-6 lg:p-12">
          <div className="absolute right-8 top-8 inline-flex overflow-hidden rounded-lg border border-app-border bg-app-surface shadow-md">
            <button className="inline-flex h-10 w-10 items-center justify-center text-app-primary transition hover:bg-app-primary/10">
              <Sun className="h-4 w-4" />
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center text-app-text-secondary transition hover:bg-app-background">
              <Moon className="h-4 w-4" />
            </button>
          </div>

          <div className="mx-auto mt-14 max-w-[520px]">
            <h2 className="text-[34px] font-bold leading-none tracking-[-0.025em] text-app-text-primary lg:text-[46px]">
              Selamat datang kembali 👋
            </h2>
            <p className="mt-3 text-[16px] text-app-text-secondary lg:text-[19px]">Masuk untuk melanjutkan ke akun Anda</p>

            <form onSubmit={handleSubmit} className="mt-9 space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-app-text-primary">
                  Email
                </label>
                <div className="flex h-12 items-center gap-2 rounded-lg border border-app-border/50 bg-app-surface/50 px-4 transition focus-within:border-app-primary focus-within:shadow-lg focus-within:shadow-app-primary/20">
                  <Mail className="h-4 w-4 text-app-text-secondary" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full bg-transparent text-sm outline-none text-app-text-primary placeholder:text-app-text-secondary"
                    placeholder="nama@contoh.com"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-bold text-app-text-primary">
                    Password
                  </label>
                  <button type="button" className="text-sm font-bold text-app-primary transition hover:text-app-accent">
                    Lupa password?
                  </button>
                </div>
                <div className="flex h-12 items-center gap-2 rounded-lg border border-app-border/50 bg-app-surface/50 px-4 transition focus-within:border-app-primary focus-within:shadow-lg focus-within:shadow-app-primary/20">
                  <Lock className="h-4 w-4 text-app-text-secondary" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full bg-transparent text-sm outline-none text-app-text-primary placeholder:text-app-text-secondary"
                    placeholder="Masukkan password Anda"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-app-text-secondary transition hover:text-app-text-primary"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {errorMessage ? <p className="text-sm text-red-500 font-medium">{errorMessage}</p> : null}

              <button type="submit" disabled={isLoading} className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-app-primary to-app-accent text-sm font-bold text-white shadow-lg shadow-app-primary/40 transition hover:shadow-xl hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70">
                {isLoading ? "Memproses..." : "Masuk"}
              </button>

              <div className="flex items-center gap-3 text-sm text-app-text-secondary">
                <span className="h-px flex-1 bg-app-border" />
                atau masuk dengan
                <span className="h-px flex-1 bg-app-border" />
              </div>

              <button type="button" className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-app-border/50 bg-app-surface/50 text-sm font-semibold text-app-text-primary transition hover:bg-app-surface hover:shadow-md">
                <span className="text-xl text-red-500">G</span>
                Lanjutkan dengan Google
              </button>

              <button type="button" className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-app-border/50 bg-app-surface/50 text-sm font-semibold text-app-text-primary transition hover:bg-app-surface hover:shadow-md">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  f
                </span>
                Lanjutkan dengan Facebook
              </button>

              <p className="text-center text-sm text-app-text-secondary">
                Belum punya akun? <span className="font-bold text-app-primary cursor-pointer transition hover:text-app-accent">Daftar sekarang</span>
              </p>

              <div className="rounded-lg border border-app-border/50 bg-app-surface/50 p-4 transition hover:bg-app-surface">
                <div className="flex items-center gap-2 text-sm font-bold text-app-text-primary">
                  <ShieldCheck className="h-4 w-4 text-app-primary" />
                  Aman & Terpercaya
                </div>
                <p className="mt-1 text-xs text-app-text-secondary">Data Anda dilindungi dengan enkripsi tingkat tinggi</p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
