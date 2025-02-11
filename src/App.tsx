import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./components/ui/AppLayout";
import RoomsPage from "./pages/RoomsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ReservationsPage from "./pages/ReservationsPage";
import { ClerkProvider } from "@clerk/clerk-react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<RoomsPage />}></Route>
              <Route
                path="/reservations"
                element={<ReservationsPage />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="bottom-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
              style: {
                backgroundColor: "green",
                color: "white",
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                borderRadius: "8px",
              },
            },
            error: {
              duration: 5000,
              style: {
                backgroundColor: "red",
                color: "white",
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                borderRadius: "8px",
              },
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;
