import { notification } from "antd";
import CookiesModal from "components/CookiesModal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
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
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  useEffect(() => {
    if (cookies.user !== "login") {
      setTimeout(() => {
        setIsOpen(true);
      }, 3000);
    }
  }, []);

  return (
    <CookiesProvider>
      <Header className={className?.header} />
      <div className="layout">{children}</div>
      <Footer className={className?.footer} />
      <ToastContainer position="top-center" theme="dark" />
      <CookiesModal open={isOpen} onCancel={() => setIsOpen(false)} />
    </CookiesProvider>
  );
}
