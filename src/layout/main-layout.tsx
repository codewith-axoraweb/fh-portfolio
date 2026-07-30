import type { ReactNode } from "react";

import { Montserrat } from "next/font/google";

import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { classNames } from "@/utility/classNames";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navbar />
        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
}
