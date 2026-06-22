export type LoginSuccessResponse = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    expiresAtUtc: string;
    user: {
      id: string;
      fullName: string;
      email: string;
      role: string;
      workspaceId: string;
      workspaceName: string;
    };
  };
  errors: unknown;
  traceId: string;
};

const AUTH_STORAGE_KEY = "viralin.auth.session";

export function setAuthSession(payload: LoginSuccessResponse) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
}

export function getAuthSession(): LoginSuccessResponse | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as LoginSuccessResponse;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function getAccessToken(): string | null {
  const session = getAuthSession();
  return session?.data.accessToken ?? null;
}

export function getAuthorizationHeader(): string | null {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return null;
  }

  return `Bearer ${accessToken}`;
}

export function clearAuthSession() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function clearAllLocalStorage() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.clear();
}
