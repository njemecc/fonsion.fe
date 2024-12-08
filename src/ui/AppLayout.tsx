import { Outlet } from "react-router";
import Footer from "./Footer";
import { AceternityNavBar } from "./AceternityNavBar";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AceternityNavBar />

      <main className="flex-grow container mx-auto py-8 px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
