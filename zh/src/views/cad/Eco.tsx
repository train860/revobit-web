import cn from "classnames";
import Button from "components/Button";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/Cad.module.scss";
export default function Eco() {
  return (
    <div className={styles.eco}>
      <div className={styles["eco-content"]}>
        <h2>链接REVOBIT生态</h2>
        <div className={styles["eco-items"]}>
          <div className={styles["eco-item"]}>
            <div className={cn(styles["eco-item-icon"], styles.i1)}>
              <Image src="/images/cad/studio.png" alt="" fill />
            </div>
            <h3>打通STUDIO</h3>
            <p>借助Studio即时渲染，协同工作，高效沟通，提高中单率</p>
            <div className={styles.btn}>
              <Link href={"/studio"}>了解更多</Link>
            </div>
          </div>
          <div className={styles["eco-item"]}>
            <div className={cn(styles["eco-item-icon"], styles.i2)}>
              <Image src="/images/cad/library.png" alt="" fill />
            </div>
            <h3>打通Library</h3>
            <p>随时调取，丰富的模型库（主材库/大底库楦头库/配件库）</p>
            <div className={styles.btn}>
              <Link href={"/fim/library"}>了解更多</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
