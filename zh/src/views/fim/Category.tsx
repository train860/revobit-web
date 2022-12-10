import cn from "classnames";
import FimRing from "components/FimRing";
import Image from "next/image";
import styles from "styles/Fim.module.scss";
//解决方案
export default function Category() {
  return (
    <div className="bg-rev-bg-black-0B pb-32 pt-23 relative">
      <div className="container">
        <h2 className="section-title">FIM的优势</h2>
        <FimRing />
      </div>
      <div className={styles["category-bg"]}></div>
    </div>
  );
}
