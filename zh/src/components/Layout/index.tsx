import React from "react";
import { ToastContainer } from "react-toastify";

import Footer from "../Footer";
import Header from "../Header";
export interface Props {
  className?: {
    header?: string;
    footer?: string;
  };
  children: React.ReactNode;
}

export default function Layout({ children, className }: Props) {
  return (
    <>
      <Header className={className?.header} />
      <div className="layout">{children}</div>
      <Footer className={className?.footer} />
      <ToastContainer position="top-center" theme="dark" />
    </>
  );
}
