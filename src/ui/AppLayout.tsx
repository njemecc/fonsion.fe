import { Outlet } from "react-router";
import { AceternityNavBar } from "./AceternityNavBar";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AceternityNavBar />

      <main className="flex-grow container mx-auto py-8 px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
