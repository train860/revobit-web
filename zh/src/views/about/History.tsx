import Image from "next/image";
import styles from "styles/About.module.scss";
export default function History() {
  return (
    <div className={styles.history}>
      <div className={styles.light}></div>
      <Image src={"/images/about/road.png"} className="image" fill alt="" />
    </div>
  );
}
