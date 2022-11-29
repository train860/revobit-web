import LightCard from "components/LightCard";
import styles from "styles/Verse.module.scss";
export type CardItem = {
  icon?: string;
  title: string;
  description: string;
};
interface Props {
  size?: "small" | "medium" | "large";
  items: CardItem[];
}
export default function FunctionSection(props: Props) {
  return (
    <div className={styles["function-section"]}>
      {props.items.map((item, index) => (
        <LightCard
          size={props.size}
          key={String(index)}
          icon={item.icon || ""}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
