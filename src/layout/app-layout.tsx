import { Outlet } from "react-router";
//penser ici a ajouter le header et le footer que je vais créer dans layout

export function Applayout() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 container mx-auto py-10">
        <Outlet />
      </main>
    </div>
  );
}
