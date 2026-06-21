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
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
}

export function getAuthSession(): LoginSuccessResponse | null {
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

export function clearAuthSession() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function clearAllLocalStorage() {
  localStorage.clear();
}
