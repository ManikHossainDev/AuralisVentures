// import Navbar from "@/components/Navbar";
import React from "react";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>
      {/* <Navbar /> */}
      {children}
    </section>;
};

export default AuthLayout;
