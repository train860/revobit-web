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
  location:
    "中华人民共和国 广东省 广州市 海珠区新港东路70号 万胜汇创客PARK 15栋001",
  workTime: "星期一 - 星期五 9:30AM - 6:00PM",
  contact: "19928307570",
  email: "customer@4dstc.com",
  product: {
    title: "产品",
    values: [
      {
        name: "全链路解决方案",
        url: "",
      },
      {
        name: "材料数字化",
        url: "",
      },
      {
        name: "设计工具",
        url: "",
      },
      {
        name: "数字化服务",
        url: "",
      },
      {
        name: "XR",
        url: "",
      },
    ],
  },
  solutions: {
    title: "解决方案",
    values: [
      {
        name: "品牌商",
        url: "",
      },
      {
        name: "材料商",
        url: "",
      },
      {
        name: "制造商",
        url: "",
      },
      {
        name: "生态合作伙伴",
        url: "",
      },
    ],
  },
  chains: {
    title: "供应链",
    values: [
      {
        name: "美安科技",
        url: "",
      },
      {
        name: "智慧生物科技",
        url: "",
      },
      {
        name: "美达布料工艺",
        url: "",
      },
    ],
  },
  download: {
    title: "下载中心",
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
    title: "关于我们",
    values: [
      {
        name: "关于时谛",
        url: "",
      },
      {
        name: "时谛动态",
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
            <LocationIcon style={{ width: 30 }} />
            <span style={{ marginTop: -4 }}>{footer.location}</span>
          </div>
          <div className={styles["left-section"]}>
            <TimeIcon />
            <span>{footer.workTime}</span>
          </div>
          <div className={styles["left-section"]}>
            <PhoneIcon />
            <span>{footer.contact}</span>
          </div>
          <div className={styles["left-section"]}>
            <EmailIcon />
            <span>{footer.email}</span>
          </div>
          <div className={styles["left-section"]}>
            <div className="flex flex-row items-center">
              <BilibliIcon className="mr-6" />
              <TiktokIcon className="mr-6" />
              <WechatIcon className="mr-6" />
              <QQIcon />
            </div>
          </div>
        </div>

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
        </div>
      </div>
    </div>
  );
}
