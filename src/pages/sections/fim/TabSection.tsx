import Button from "components/Button";
import styles from "styles/Fim.module.scss";
export type TabData = {
  title: string;
  des: string[];
  link?: string;
  buttonLink?: string;
  image?: string;
};
export interface Props {
  data: TabData;
  simple?: boolean;
}
export default function TabSection({ simple, data }: Props) {
  console.log(data);
  return (
    <div className={styles["tab-section"]}>
      <div className={styles["left"]}>
        <div>
          <h2>{data?.title}</h2>
          <div className={styles["des"]}>
            {data?.des.map((item: string, index: number) => (
              <p key={String(index)}>{item}</p>
            ))}
          </div>
          {!simple && (
            <>
              <a className={styles["more"]} href="">
                了解更多
              </a>
              <Button className="mt-16">免费使用</Button>
            </>
          )}
        </div>
      </div>
      <div className={styles["right"]}>00</div>
    </div>
  );
}
