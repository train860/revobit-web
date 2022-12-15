import logo from "assets/images/logo-footer.svg";
import cn from "classnames";
import BilibliIcon from "components/Icons/BilibiliIcon";
import EmailIcon from "components/Icons/EmailIcon";
import LocationIcon from "components/Icons/LocationIcon";
import PhoneIcon from "components/Icons/PhoneIcon";
import QQIcon from "components/Icons/QQIcon";
import TiktokIcon from "components/Icons/TiktokIcon";
import TimeIcon from "components/Icons/TimeIcon";
import WechatIcon from "components/Icons/WechatIcon";
import Image from "next/image";

import styles from "./Footer.module.scss";

type LinkItem = {
  name: string;
  url?: string;
};
interface Props {
  className?: string;
}
const footer = {
  workTime: "星期一 - 星期五 9:30AM - 6:00PM",
  contact: "19928307570",
  email: "customer@4dstc.com",
  product: {
    title: "数字化解决方案",
    values: [
      {
        name: "Revofim概览",
        url: "/fim.html",
      },
      {
        name: "Revofim studio",
        url: "",
      },
      {
        name: "Revofim library",
        url: "/fim/library.html",
      },
      {
        name: "Revofim manager",
        url: "/fim/manager.html",
      },
      {
        name: "Revofim trends",
        url: "/trends.html",
      },
    ],
  },
  solutions: {
    title: "材料数字化",
    values: [
      {
        name: "Versekit",
        url: "/verse/versekit.html",
      },
      {
        name: "Versebook",
        url: "/verse/versebook.html",
      },
    ],
  },
  chains: {
    title: "设计工具",
    values: [
      {
        name: "KicksCAD",
        url: "",
      },
    ],
  },
  download: {
    title: "下载中心",
    values: [
      {
        name: "Revofim",
        url: "https://download.revofim.co/download/IdeationInstaller-latest.exe",
      },
      {
        name: "KicksCAD 2D",
        url: "https://download.revofim.co/download/KicksCAD/KicksCAD2D-win-Installer-latest.exe",
      },
      {
        name: "KicksCAD 3D",
        url: "https://download.revofim.co/download/KicksCAD/KicksCAD3D-win-Installer-latest.exe",
      },
      {
        name: "Verseset",
        url: "https://download.revofim.co/download/VersesetInstaller_CN_latest.exe",
      },
    ],
  },
  about: {
    title: "关于我们",
    values: [
      {
        name: "关于时谛",
        url: "",
      },
      {
        name: "资讯动态",
        url: "",
      },
      {
        name: "人才招募",
        url: "",
      },
      {
        name: "商务合作",
        url: "",
      },
      {
        name: "隐私政策",
        url: "",
      },
    ],
  },
};
export default function Footer({ className }: Props) {
  return (
    <div className={cn(styles["footer"], className)}>
      <div className="container flex flex-row">
        <div className={cn(styles["col-card"], "flex-2")}>
          <div className={styles["logo"]}>
            <Image alt="" fill src={logo} />
          </div>
          <div
            className={cn(styles["left-section"], "relative")}
            style={{ alignItems: "start" }}
          >
            <LocationIcon />
            <span style={{ marginTop: -4 }}>
              中华人民共和国 广东省 广州市 海珠区新港东路70号
              <br />
              万胜汇创客PARK 15栋001
            </span>
          </div>
          {/*
          <div className={styles["left-section"]}>
            <TimeIcon />
            <span>{footer.workTime}</span>
          </div>*/}
          <div className={styles["left-section"]}>
            <PhoneIcon />
            <span>{footer.contact}（微信同号）</span>
          </div>
          <div className={styles["left-section"]}>
            <EmailIcon />
            <span>{footer.email}</span>
          </div>
          {/*
          <div className={styles["left-section"]}>
            <div className="flex flex-row items-center">
              <BilibliIcon className="mr-6" />
              <TiktokIcon className="mr-6" />
              <WechatIcon className="mr-6" />
              <QQIcon />
            </div>
          </div>*/}
        </div>

        <div className="flex-3 grid grid-cols-5 gap-1">
          <div className={styles["col-card"]}>
            <h2>{footer.product.title}</h2>
            {footer.product.values.map((item: LinkItem, index: number) => (
              <p key={String(index)}>
                <a href={item.url}>{item.name}</a>
              </p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{footer.solutions.title}</h2>
            {footer.solutions.values.map((item: LinkItem, index: number) => (
              <p key={String(index)}>
                <a href={item.url}>{item.name}</a>
              </p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{footer.chains.title}</h2>
            {footer.chains.values.map((item: LinkItem, index: number) => (
              <p key={String(index)}>
                <a href={item.url}>{item.name}</a>
              </p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{footer.download.title}</h2>
            {footer.download.values.map((item: LinkItem, index: number) => (
              <p key={String(index)}>
                <a href={item.url}>{item.name}</a>
              </p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{footer.about.title}</h2>
            {footer.about.values.map((item: LinkItem, index: number) => (
              <p key={String(index)}>
                <a href={item.url}>{item.name}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles["copyright"]}>
          <span>Copyright © 2022 Revobit 时谛智能 版权所有</span>
          <span>
            粤公网安备 44010502002158号|<a href="">粤ICP备17078055号</a>
          </span>
        </div>
      </div>
    </div>
  );
}
