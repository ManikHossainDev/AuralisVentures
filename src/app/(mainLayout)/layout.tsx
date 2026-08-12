import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="">
        <Navbar />
      </div>
      {children}
      <Footer />
    </section>
  );
};

export default MainLayout;