import Image from "next/image";
import styles from "styles/Trends.module.scss";
interface Props {
  icon: string;
  title: string;
  description: string;
  video: string;
}
export default function VideoCard({ icon, title, description }: Props) {
  return (
    <div className={styles["video-card"]}>
      <div className={styles.icon}>
        <Image src={icon} alt={title} fill className="image" />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
