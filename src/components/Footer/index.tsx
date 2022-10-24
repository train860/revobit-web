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
import Image from "next/future/image";

import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={cn(styles["footer"])}>
      <div className="container grid grid-cols-2">
        <div className={styles["col-card"]}>
          <div className="">
            <Image alt="" src={logo} />
          </div>
          <div className={styles["left-section"]}>
            <LocationIcon />
            <span>
              中华人民共和国 广东省 广州市 海珠区新港东路70号 万胜汇创客PARK
              15栋001
            </span>
          </div>
          <div className={styles["left-section"]}>
            <TimeIcon />
            <span>星期一 - 星期五 9:30AM - 6:00PM</span>
          </div>
          <div className={styles["left-section"]}>
            <PhoneIcon />
            <span>19928307570</span>
          </div>
          <div className={styles["left-section"]}>
            <EmailIcon />
            <span>customer@4dstc.com</span>
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

        <div className="grid grid-cols-4">
          <div className={styles["col-card"]}>
            <h2>产品</h2>
            <p>
              <a href="">全链路解决方案</a>
            </p>
            <p>
              <a href="">材料数字化</a>
            </p>
            <p>
              <a href="">设计工具</a>
            </p>
            <p>
              <a href="">数字化服务</a>
            </p>
            <p>
              <a href="">XR</a>
            </p>
          </div>
          <div className={styles["col-card"]}>
            <h2>解决方案</h2>
            <p>
              <a href="">品牌商</a>
            </p>
            <p>
              <a href="">材料商</a>
            </p>
            <p>
              <a href="">制造商</a>
            </p>
            <p>
              <a href="">生态合作伙伴</a>
            </p>
          </div>
          <div className={styles["col-card"]}>
            <h2>供应链</h2>
            <p>
              <a href="">美安科技</a>
            </p>
            <p>
              <a href="">智慧生物科技</a>
            </p>
            <p>
              <a href="">美达布料工艺</a>
            </p>
          </div>
          <div className={styles["col-card"]}>
            <h2>下载中心</h2>
            <p>
              <a href="">Revofin</a>
            </p>
            <p>
              <a href="">Versebook</a>
            </p>
            <p>
              <a href="">Versekit</a>
            </p>
            <p>
              <a href="">KicksCAD</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
