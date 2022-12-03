import b1 from "assets/images/home/case-b1.png";
import b2 from "assets/images/home/case-b2.png";
import b3 from "assets/images/home/case-b3.png";
import b4 from "assets/images/home/case-b4.png";
import cn from "classnames";
import RoundArrowRightIcon from "components/Icons/RoundArrowRightIcon";
import Image from "next/image";
import styles from "styles/Home.module.scss";
//案例
export default function Case() {
  return (
    <div className="bg-rev-bg-black-0B relative overflow-hidden">
      <div className="container py-32">
        <h2 className="section-title">解决方案</h2>
        <h3 className="section-subtitle">
          时谛智能为鞋、服、包等时尚行业提供全链路数字化解决方案
        </h3>
        <div className="grid grid-cols-4 gap-5">
          <div className={cn(styles.case, styles.s1)}>
            <h2>01</h2>
            <h3>品牌商</h3>
            <RoundArrowRightIcon />
            <div className={styles["bg-image"]}>
              <Image src={b1} alt="" fill />
            </div>
          </div>
          <div className={cn(styles.case, styles.s2)}>
            <h2>02</h2>
            <h3>材料商</h3>
            <RoundArrowRightIcon />
            <div className={styles["bg-image"]}>
              <Image src={b2} alt="" fill />
            </div>
          </div>
          <div className={cn(styles.case, styles.s3)}>
            <h2>03</h2>
            <h3>制造商</h3>
            <RoundArrowRightIcon />
            <div className={styles["bg-image"]}>
              <Image src={b3} alt="" fill />
            </div>
          </div>
          <div className={cn(styles.case, styles.s4)}>
            <h2>04</h2>
            <h3>生态合作伙伴</h3>
            <RoundArrowRightIcon />
            <div className={styles["bg-image"]}>
              <Image src={b4} alt="" fill />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.casebg}></div>
    </div>
  );
}
