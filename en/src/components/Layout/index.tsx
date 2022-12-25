import { notification } from "antd";
import CookiesModal from "components/CookiesModal";
import Image from "next/image";
import React, { useEffect } from "react";
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
const NotificationHeader = () => {
  return (
    <div className="notification-header">
      <span>We use cookies</span>
      <div className="notification-header__icon">
        <Image src="/images/icon/icon-cloud.png" fill alt="" />
      </div>
    </div>
  );
};
export default function Layout({ children, className }: Props) {
  const [api, contextHolder] = notification.useNotification();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  useEffect(() => {
    api.destroy("notification");
    if (cookies.user !== "login") {
      setTimeout(() => {
        openNotification();
      }, 3000);
    }
  }, []);
  const openNotification = () => {
    api.open({
      key: "notification",
      message: <NotificationHeader />,
      description: (
        <CookiesModal
          onBtnClick={() => {
            closeNotification();
            setCookie("user", "login", {
              path: "/",
              maxAge: 60 * 60 * 24 * 30 * 360,
              sameSite: true,
            });
          }}
        />
      ),
      placement: "bottomLeft",
      duration: 0,
      className: "custom-notification",
      style: {
        width: 720,
        padding: 0,
      },
    });
  };
  const closeNotification = () => {
    api.destroy("notification");
  };
  return (
    <CookiesProvider>
      <Header className={className?.header} />
      <div className="layout">{children}</div>
      <Footer className={className?.footer} />
      <ToastContainer position="top-center" theme="dark" />
      {contextHolder}
    </CookiesProvider>
  );
}
