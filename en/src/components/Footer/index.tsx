import logo from "assets/images/logo-footer.svg";
import cn from "classnames";
import BilibliIcon from "components/Icons/BilibiliIcon";
import EmailIcon from "components/Icons/EmailIcon";
import LocationIcon from "components/Icons/LocationIcon";
import TimeIcon from "components/Icons/TimeIcon";
import WechatIcon from "components/Icons/WechatIcon";
import Privacy from "components/Privacy";
import Image from "next/image";
import { useState } from "react";

import styles from "./Footer.module.scss";

type LinkItem = {
  name: string;
  url?: string;
};
interface Props {
  className?: string;
}
const footer = {
  location:
    "Building 15, Wanshenghui Chuangke Park, No. 70 East Xingang Road, Haizhu District, Guangzhou City, Guangdong Province, China",
  workTime: "Mon. to Fri., 9:00 AM  to 6:30 PM",
  contact: "19928307570",
  email: "customer@revobit.ai",
  product: {
    title: "Product",
    values: [
      {
        name: "End-to-end Solutions",
        url: "",
      },
      {
        name: "Material Digitization",
        url: "",
      },
      {
        name: "Design Tools",
        url: "",
      },
      {
        name: "Digital Services",
        url: "",
      },
      {
        name: "XR",
        url: "",
      },
    ],
  },
  solutions: {
    title: "Solutions",
    values: [
      {
        name: "Brands",
        url: "",
      },
      {
        name: "Material Suppliers",
        url: "",
      },
      {
        name: "Manufacturers",
        url: "",
      },
      {
        name: "Partners",
        url: "",
      },
    ],
  },
  chains: {
    title: "Supply Chains",
    values: [
      {
        name: "Meian Technology",
        url: "",
      },
      {
        name: "Smart Bio-technology",
        url: "",
      },
      {
        name: "Medal Arts & Crafts Product ",
        url: "",
      },
    ],
  },
  download: {
    title: "Download",
    values: [
      {
        name: "Revofim",
        url: "",
      },
      {
        name: "Versebook",
        url: "",
      },
      {
        name: "Versekit",
        url: "",
      },
      {
        name: "KicksCAD",
        url: "",
      },
    ],
  },
  about: {
    title: "About Us",
    values: [
      {
        name: "About Revobit",
        url: "",
      },
      {
        name: "Revobit Updates",
        url: "",
      },
      {
        name: "Careers",
        url: "",
      },
      {
        name: "Business Partnership",
        url: "",
      },
    ],
  },
};
export default function Footer({ className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn(styles["footer"], className)}>
      <div className="container flex flex-row">
        <div className={cn(styles["col-card"], "flex-2")}>
          <div className={styles["logo"]}>
            <Image alt="" fill src={"/images/logo-en.png"} />
          </div>
          <div
            className={cn(styles["left-section"], "relative")}
            style={{ alignItems: "start" }}
          >
            <LocationIcon />
            <span style={{ marginTop: -4 }}>{footer.location}</span>
          </div>
          <div className={styles["left-section"]}>
            <TimeIcon />
            <span>{footer.workTime}</span>
          </div>

          <div className={styles["left-section"]}>
            <EmailIcon />
            <span>{footer.email}</span>
          </div>
        </div>
        {/**
        <div className="flex-3 grid grid-cols-5 gap-1">
          <div className={styles["col-card"]}>
            <h2>{footer.product.title}</h2>
            {footer.product.values.map((item: LinkItem, index: number) => (
              <p key={String(index)}>{item.name}</p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{footer.solutions.title}</h2>
            {footer.solutions.values.map((item: LinkItem, index: number) => (
              <p key={String(index)}>{item.name}</p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{footer.chains.title}</h2>
            {footer.chains.values.map((item: LinkItem, index: number) => (
              <p key={String(index)}>{item.name}</p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{footer.download.title}</h2>
            {footer.download.values.map((item: LinkItem, index: number) => (
              <p key={String(index)}>{item.name}</p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{footer.about.title}</h2>
            {footer.about.values.map((item: LinkItem, index: number) => (
              <p key={String(index)}>{item.name}</p>
            ))}
          </div>
            </div>*/}
      </div>
      <div className="container">
        <div className={styles["copyright"]}>
          <span>Copyright © 2022 Revobit Inc. All Rights Reserved.</span>
          <span>
            <a href="javascript:;" onClick={() => setIsOpen(true)}>
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
      <Privacy open={isOpen} onCancel={() => setIsOpen(false)} />
    </div>
  );
}
