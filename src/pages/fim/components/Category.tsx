import s1 from "assets/images/s1.svg";
import s2 from "assets/images/s2.svg";
import s3 from "assets/images/s3.svg";
import s4 from "assets/images/s4.svg";
import cn from "classnames";
import FimRing from "components/FimRing";
import Image from "next/future/image";
import styles from "styles/Fim.module.scss";
//解决方案
export default function Category() {
  return (
    <div className="bg-rev-bg-black-0B pb-32">
      <div className="container">
        <h2 className="section-title">FIM的优势</h2>
        <FimRing />
      </div>
    </div>
  );
}
