import cn from 'classnames'
import Image from "next/image";
import styles from "styles/Case.module.scss";
interface Props {
  title: string;
  logo: string;
  link?: string;
  image: string;
  logoWidth?: number;
  logoHeight?: number;
}
export default function Card(props: Props) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={styles.cover}></div>
      <div className={styles.content}>
        <div className={styles.logo} style={{ width: props.logoWidth, height: props.logoHeight }}>
          <Image src={props.logo} alt="" fill />
        </div>
        <h2 dangerouslySetInnerHTML={{ __html: props.title }}></h2>
        <div className={styles.icon}>
          <Image src={"/icons/btn-next.png"} alt="" fill />
        </div>
      </div>
    </div>
  );
}
