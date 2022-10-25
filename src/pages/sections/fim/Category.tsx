import s1 from "assets/images/s1.svg";
import s2 from "assets/images/s2.svg";
import s3 from "assets/images/s3.svg";
import s4 from "assets/images/s4.svg";
import cn from "classnames";
import Image from "next/future/image";
import styles from "styles/Fim.module.scss";
//解决方案
export default function Category() {
  return (
    <div className="bg-rev-bg-black-14">
      <div className="container py-6 ">
        <h2 className="section-title">FIM的优势</h2>
        <div className="grid grid-cols-4 gap-8">
          <div className={cn(styles.scheme, styles.s1)}>
            <div className={styles["scheme-icon"]}>
              <Image src={s1} alt="" />
            </div>
            <div className={styles["scheme-text"]}>
              <h2>Trends</h2>
              <p>基于海量数据分析，借助AI智能精准洞察趋势打造爆款</p>
            </div>
          </div>
          <div className={cn(styles.scheme, styles.s2)}>
            <div className={styles["scheme-icon"]}>
              <Image src={s2} alt="" />
            </div>
            <div className={styles["scheme-text"]}>
              <h2>Studio</h2>
              <p>
                交互式3D实时查看与设计，可视化信息无缝沟通传达，加速产品迭代设计
              </p>
            </div>
          </div>
          <div className={cn(styles.scheme, styles.s3)}>
            <div className={styles["scheme-icon"]}>
              <Image src={s3} alt="" />
            </div>
            <div className={styles["scheme-text"]}>
              <h2>Manager</h2>
              <p>实时掌控工作进度，推动关键流程运转，提升整体效率</p>
            </div>
          </div>
          <div className={cn(styles.scheme, styles.s4)}>
            <div className={styles["scheme-icon"]}>
              <Image src={s4} alt="" />
            </div>
            <div className={styles["scheme-text"]}>
              <h2>Library</h2>
              <p>集中管理、沉淀数字资产，实现数字资产的共享与敏捷调用</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
