"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuthSession } from "@/lib/auth-storage";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const session = getAuthSession();

    if (session?.data.accessToken) {
      router.replace("/dashboard");
      return;
    }

    router.replace("/login");
  }, [router]);

  return null;
}
