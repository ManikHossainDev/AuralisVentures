import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="">
      <div className="">
        <Navbar />
      </div>

      <div className="flex xl:container mx-auto">
        {/* Sidebar - 20% */}
        <div className="w-[20%]">
          <Sidebar />
        </div>

        {/* Content - 80% */}
        <div className="w-[80%]">
          {children}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Layout;