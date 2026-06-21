"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { getAuthSession } from "@/lib/auth-storage";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const session = getAuthSession();
    const isLoggedIn = Boolean(session?.data.accessToken);
    const isLoginPage = pathname === "/login";

    if (!isLoggedIn && !isLoginPage) {
      router.replace("/login");
    }

    if (isLoggedIn && isLoginPage) {
      router.replace("/dashboard");
    }

    setIsReady(true);
  }, [pathname, router]);

  if (pathname === "/login") {
    return <main className="min-h-screen">{children}</main>;
  }

  if (!isReady) {
    return <main className="min-h-screen bg-app-background" />;
  }

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader />
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
