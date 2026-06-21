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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#eef0ff,transparent_40%),radial-gradient(circle_at_top_right,#e9edff,transparent_35%),#f6f7fb] p-4 lg:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-40px)] max-w-[1320px] overflow-hidden rounded-[24px] border border-app-border bg-white lg:grid-cols-2">
        <section className="relative flex flex-col justify-between bg-gradient-to-br from-[#f4f5ff] via-[#f6f7ff] to-[#efe6ff] p-8 lg:p-10">
          <div className="pointer-events-none absolute left-[-90px] top-[-110px] h-[250px] w-[250px] rounded-full bg-[#d8d2ff]/40 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-120px] right-[-50px] h-[260px] w-[260px] rounded-full bg-[#f4dcff]/45 blur-3xl" />
          <div>
            <div className="inline-flex items-center gap-2 text-[40px] font-semibold tracking-[-0.03em] text-[#181f3a]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#6d5ef9] to-[#a855f7] text-white">
                <Bot className="h-5 w-5" />
              </span>
              viralin.pro
            </div>

            <h1 className="mt-10 max-w-[520px] text-[44px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#121833] lg:text-[58px]">
              Kelola Konten.
              <br />
              Tumbuhkan Audiens.
              <br />
              <span className="text-[#5c3ff6]">Raih Viral.</span>
            </h1>

            <p className="mt-4 max-w-[510px] text-[17px] leading-relaxed text-[#556080] lg:text-[20px]">
              Platform AI untuk kreator dan tim marketing dalam membuat, menganalisis, dan mengoptimalkan konten yang berdampak.
            </p>

            <div className="mt-8 max-w-[500px] space-y-3">
              <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#eeeaff] text-[#6d5ef9]">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[19px] font-semibold text-[#161d39]">Analitik Mendalam</p>
                  <p className="text-[15px] text-[#5f6a89]">Pantau performa konten secara real-time dengan insight yang akurat.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#eeeaff] text-[#6d5ef9]">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[19px] font-semibold text-[#161d39]">AI Assistant</p>
                  <p className="text-[15px] text-[#5f6a89]">Dapatkan ide konten, caption, dan strategi dengan bantuan AI.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#eeeaff] text-[#6d5ef9]">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[19px] font-semibold text-[#161d39]">Manajemen Mudah</p>
                  <p className="text-[15px] text-[#5f6a89]">Jadwalkan, publikasikan, dan kelola konten di semua platform.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 hidden h-[260px] lg:block">
            <div className="absolute left-4 top-12 h-[180px] w-[330px] rotate-[-5deg] rounded-3xl border border-[#e7e8f4] bg-white p-4 shadow-lg">
              <p className="text-sm font-semibold text-[#171f3a]">Performa Konten</p>
              <div className="mt-3 h-[120px] rounded-2xl bg-gradient-to-b from-[#f2edff] to-white" />
            </div>
            <div className="absolute left-[280px] top-0 h-[210px] w-[180px] rotate-[4deg] rounded-3xl border border-[#e7e8f4] bg-white p-4 shadow-lg">
              <p className="text-sm font-semibold text-[#171f3a]">Skor Performa AI</p>
              <div className="mx-auto mt-3 flex h-24 w-24 items-center justify-center rounded-full border-[8px] border-[#6d5ef9] text-center">
                <span className="text-4xl font-semibold text-[#171f3a]">87</span>
              </div>
              <p className="mt-3 text-center text-xs font-semibold text-[#6d5ef9]">Sangat Baik</p>
            </div>
            <div className="absolute right-8 top-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#6d5ef9] text-white shadow-lg">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </section>

        <section className="relative p-6 lg:p-12">
          <div className="absolute right-8 top-8 inline-flex overflow-hidden rounded-xl border border-app-border bg-white">
            <button className="inline-flex h-10 w-10 items-center justify-center text-[#6d5ef9]">
              <Sun className="h-4 w-4" />
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center text-[#616a86]">
              <Moon className="h-4 w-4" />
            </button>
          </div>

          <div className="mx-auto mt-14 max-w-[520px]">
            <h2 className="text-[34px] font-semibold leading-none tracking-[-0.025em] text-[#121833] lg:text-[46px]">
              Selamat datang kembali 👋
            </h2>
            <p className="mt-3 text-[16px] text-[#616a86] lg:text-[19px]">Masuk untuk melanjutkan ke akun Anda</p>

            <form onSubmit={handleSubmit} className="mt-9 space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1a223f]">
                  Email
                </label>
                <div className="flex h-12 items-center gap-2 rounded-xl border border-app-border bg-[#fbfcff] px-4">
                  <Mail className="h-4 w-4 text-[#7681a0]" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full bg-transparent text-sm outline-none"
                    placeholder="nama@contoh.com"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-semibold text-[#1a223f]">
                    Password
                  </label>
                  <button type="button" className="text-sm font-semibold text-[#6d5ef9]">
                    Lupa password?
                  </button>
                </div>
                <div className="flex h-12 items-center gap-2 rounded-xl border border-app-border bg-[#fbfcff] px-4">
                  <Lock className="h-4 w-4 text-[#7681a0]" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full bg-transparent text-sm outline-none"
                    placeholder="Masukkan password Anda"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-[#7681a0]"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : null}

              <button type="submit" disabled={isLoading} className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#5b39ff] via-[#6d5ef9] to-[#7f4cff] text-sm font-semibold text-white shadow-[0_8px_22px_rgba(98,76,255,0.35)] disabled:cursor-not-allowed disabled:opacity-70">
                {isLoading ? "Memproses..." : "Masuk"}
              </button>

              <div className="flex items-center gap-3 text-sm text-[#8a92aa]">
                <span className="h-px flex-1 bg-app-border" />
                atau masuk dengan
                <span className="h-px flex-1 bg-app-border" />
              </div>

              <button type="button" className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-app-border text-sm font-medium text-[#1d2540]">
                <span className="text-xl text-[#ef4444]">G</span>
                Lanjutkan dengan Google
              </button>

              <button type="button" className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-app-border text-sm font-medium text-[#1d2540]">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1877f2] text-xs font-semibold text-white">
                  f
                </span>
                Lanjutkan dengan Facebook
              </button>

              <p className="text-center text-sm text-[#6f7792]">
                Belum punya akun? <span className="font-semibold text-[#6d5ef9]">Daftar sekarang</span>
              </p>

              <div className="rounded-2xl border border-app-border p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#28304d]">
                  <ShieldCheck className="h-4 w-4 text-[#6f7893]" />
                  Aman & Terpercaya
                </div>
                <p className="mt-1 text-xs text-[#7f879f]">Data Anda dilindungi dengan enkripsi tingkat tinggi</p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
