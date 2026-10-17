import { Outlet } from "react-router";
import { AppHeader } from "./app-header";

export function Applayout() {
  return (
    <div className="flex gap-10 h-screen bg-primary-900 p-6">
      <AppHeader />
      <main className="flex-1 container mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
