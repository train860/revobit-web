import { animated, config, useSpring } from "@react-spring/web";
import cn from "classnames";
import Button from "components/Button";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import Image from "next/image";
import { useRef } from "react";
import styles from "styles/Fim.module.scss";
export type TabData = {
  title: string;
  des: string[];
  link?: string;
  buttonLink?: string;
  image: string;
};
export interface Props {
  data: TabData;
  simple?: boolean;
  center?: boolean;
  onButtonClick?: () => void;
}
export default function TabSection({
  simple,
  center,
  data,
  onButtonClick,
}: Props) {
  const triggerRef = useRef(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });
  const imgStyle = useSpring({
    config: { ...config.default },
    from: { opacity: 0, transform: "translateY(50%)" },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting ? "translateY(0)" : "translateY(50%)",
    },
  });
  return (
    <div className={styles["tab-section"]}>
      <div className={styles["left"]}>
        <div className={cn({ [styles["center"]]: center })}>
          <h2>{data?.title}</h2>
          <div className={styles["des"]}>
            {data?.des.map((item: string, index: number) => (
              <p key={String(index)}>{item}</p>
            ))}
          </div>
          {!simple && (
            <>
              {/*
              <a className={styles["more"]} href="">
                了解更多
          </a>*/}
              <Button className="mt-16" onClick={onButtonClick}>
                了解更多
              </Button>
            </>
          )}
        </div>
      </div>
      <div className={styles["right"]}>
        <div ref={triggerRef} />
        <animated.div className={styles["image-wrap"]} style={imgStyle}>
          <Image src={data?.image} alt="" fill className="image" />
        </animated.div>
      </div>
    </div>
  );
}
