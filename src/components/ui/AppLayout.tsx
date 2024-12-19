import { Outlet } from "react-router";
import { AceternityNavBar } from "./AceternityNavBar";
import { Footer } from "./KitwindFooter";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen min-w-full ">
      <AceternityNavBar />

      <main className="flex-grow container mx-auto w-full py-8 px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
