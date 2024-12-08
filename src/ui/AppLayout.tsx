import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto py-8 px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
