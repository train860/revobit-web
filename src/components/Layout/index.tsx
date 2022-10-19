import React from "react";

import Footer from "../Footer";
import Header from "../Header";
export interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="layout">{children}</div>
      <Footer />
    </>
  );
}
