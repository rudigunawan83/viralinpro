import { NextRequest, NextResponse } from "next/server";

function getBackendApiBaseUrl() {
  return process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "";
}

function buildApiUrl(path: string) {
  const baseUrl = getBackendApiBaseUrl();

  if (!baseUrl) {
    return "";
  }

  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

export async function GET(request: NextRequest) {
  const targetUrl = buildApiUrl("/api/v1/dashboard/overview");

  if (!targetUrl) {
    return NextResponse.json(
      {
        success: false,
        message: "API_BASE_URL belum diset. Tambahkan API_BASE_URL atau NEXT_PUBLIC_API_BASE_URL di .env.local",
      },
      { status: 500 },
    );
  }

  try {
    const authorization = request.headers.get("authorization");

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        ...(authorization ? { Authorization: authorization } : {}),
      },
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type") ?? "";
    const payload = contentType.includes("application/json")
      ? await response.json()
      : { success: false, message: await response.text() };

    return NextResponse.json(payload, { status: response.status });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal terhubung ke server API dashboard.",
      },
      { status: 502 },
    );
  }
}
