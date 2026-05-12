// app/(main)/layout.tsx

import Footer from "@/components/layout/MainFooter";
import Navbar from "@/components/layout/MainNavbar";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar only for main pages */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Optional Footer */}
      <Footer/>
    </div>
  );
}