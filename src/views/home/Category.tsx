import s1 from "assets/images/s1.svg";
import s2 from "assets/images/s2.svg";
import s3 from "assets/images/s3.svg";
import s4 from "assets/images/s4.svg";
import cn from "classnames";
import ArrowRightIcon from "components/Icons/ArrowRightIcon";
import Image from "next/future/image";
import styles from "styles/Home.module.scss";
//解决方案
export default function Category() {
  return (
    <div className="bg-rev-bg-black-14">
      <div className="container py-6 ">
        <h2 className="section-title">解决方案</h2>
        <h3 className="section-subtitle">
          时谛智能为鞋、服、包等时尚行业提供全链路数字化解决方案
        </h3>
        <div className="grid grid-cols-4 gap-5">
          <div className={cn(styles.scheme, styles.s1)}>
            <div className={styles["scheme-icon"]}>
              <Image src={s1} alt="" />
            </div>
            <div className={styles["scheme-text"]}>
              <h2>品牌商</h2>
              <a>
                <span>查看详情&nbsp;&nbsp;</span>
                <span>
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>
          <div className={cn(styles.scheme, styles.s2)}>
            <div className={styles["scheme-icon"]}>
              <Image src={s2} alt="" />
            </div>
            <div className={styles["scheme-text"]}>
              <h2>材料商</h2>
              <a>
                <span>查看详情&nbsp;&nbsp;</span>
                <span>
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>
          <div className={cn(styles.scheme, styles.s3)}>
            <div className={styles["scheme-icon"]}>
              <Image src={s3} alt="" />
            </div>
            <div className={styles["scheme-text"]}>
              <h2>制造商</h2>
              <a>
                <span>查看详情&nbsp;&nbsp;</span>
                <span>
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>
          <div className={cn(styles.scheme, styles.s4)}>
            <div className={styles["scheme-icon"]}>
              <Image src={s4} alt="" />
            </div>
            <div className={styles["scheme-text"]}>
              <h2>生态合作伙伴</h2>
              <a>
                <span>查看详情&nbsp;&nbsp;</span>
                <span>
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
