import cn from "classnames";
import RoundArrowRightIcon from "components/Icons/RoundArrowRightIcon";
import styles from "styles/Home.module.scss";
//案例
export default function Case() {
  return (
    <div className="bg-rev-bg-black-14">
      <div className="container py-6 ">
        <h2 className="section-title">解决方案</h2>
        <h3 className="section-subtitle">
          时谛智能为鞋、服、包等时尚行业提供全链路数字化解决方案
        </h3>
        <div className="grid grid-cols-4 gap-5">
          <div className={cn(styles.case, styles.s1)}>
            <h2>01</h2>
            <h3>品牌商</h3>
            <RoundArrowRightIcon />
          </div>
          <div className={cn(styles.case, styles.s2)}>
            <h2>02</h2>
            <h3>材料商</h3>
            <RoundArrowRightIcon />
          </div>
          <div className={cn(styles.case, styles.s3)}>
            <h2>03</h2>
            <h3>制造商</h3>
            <RoundArrowRightIcon />
          </div>
          <div className={cn(styles.case, styles.s4)}>
            <h2>04</h2>
            <h3>生态合作伙伴</h3>
            <RoundArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
