import { getAuthorizationHeader } from "@/lib/auth-storage";

function resolveApiUrl(input: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl || /^https?:\/\//i.test(input)) {
    return input;
  }

  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = input.startsWith("/") ? input : `/${input}`;
  return `${normalizedBase}${normalizedPath}`;
}

async function parseErrorMessage(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const payload = (await response.json()) as { message?: string; error?: string };
    return payload.message || payload.error || "API request failed";
  }

  if (contentType.includes("text/html")) {
    if (response.status === 404) {
      return "Endpoint API tidak ditemukan. Periksa API_BASE_URL atau proxy route API.";
    }

    return "Server API mengembalikan halaman HTML, bukan JSON. Periksa konfigurasi API_BASE_URL.";
  }

  const text = await response.text();
  return text || "API request failed";
}

export async function apiFetch<TResponse>(
  input: string,
  init?: RequestInit,
): Promise<TResponse> {
  const authHeader = typeof window !== "undefined" ? getAuthorizationHeader() : null;

  const headers = new Headers(init?.headers);
  headers.set("Content-Type", "application/json");

  if (authHeader) {
    headers.set("Authorization", authHeader);
  }

  const response = await fetch(resolveApiUrl(input), {
    ...init,
    headers,
  });

  if (!response.ok) {
    const message = await parseErrorMessage(response);
    throw new Error(message);
  }

  return (await response.json()) as TResponse;
}
