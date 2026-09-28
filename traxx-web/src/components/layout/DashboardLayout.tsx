import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="p-6 flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
