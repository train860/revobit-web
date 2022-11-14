import cn from "classnames";
import Image from "next/future/image";
import styles from "styles/Verse.module.scss";
interface FileTypeCardProps {
  icon: string;
}
function FileTypeCard(props: FileTypeCardProps) {
  return (
    <div className={styles["file-type-card"]}>
      <div className={styles["file-type-card-icon"]}>
        <Image src={props.icon} fill alt="" />
      </div>
    </div>
  );
}
interface Props {
  icons: string[];
}

export default function FileTypeSection(props: Props) {
  return (
    <div className={cn(styles["file-type-section"], "container")}>
      {props.icons.map((icon, index) => (
        <FileTypeCard key={index} icon={icon} />
      ))}
    </div>
  );
}
