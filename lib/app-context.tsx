"use client";

import { createContext, useContext, useMemo, useState } from "react";

type AppContextValue = {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const value = useMemo(
    () => ({
      isSidebarCollapsed,
      toggleSidebar: () => setIsSidebarCollapsed((prev) => !prev),
    }),
    [isSidebarCollapsed],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
}
