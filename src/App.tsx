import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import CartSidebar from "./components/CartSidebar";
import ScrollManager from "./components/ScrollManager";
import { CartProvider } from "./lib/cart-context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// Create a layout component that includes Navbar and Footer
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          {isLoading ? (
            <Loader onComplete={() => setIsLoading(false)} />
          ) : (
            <BrowserRouter>
              <ScrollManager />
              <Routes>
                <Route element={<RootLayout />}>
                  <Route path="/" element={<Index />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
              <BackToTop />
              <CartSidebar />
            </BrowserRouter>
          )}
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;