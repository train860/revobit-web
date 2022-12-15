import Image from "next/image";
import styles from "styles/Cad.module.scss";
export default function Library() {
  return (
    <div className={styles.library}>
      <div className={styles["library-content"]}>
        <h2>KicksCad创作库</h2>
        <div className={styles["library-items"]}>
          <Image src="/images/cad/library-bg.png" alt="" fill />
        </div>
      </div>
    </div>
  );
}
