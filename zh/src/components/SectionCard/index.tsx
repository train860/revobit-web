import { animated, config, useSpring } from "@react-spring/web";
import cn from "classnames";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import Image from "next/image";
import { useRef } from "react";

import styles from "./SectionCard.module.scss";
export type DesItem = {
  icon?: string;
  text: string;
  description?: string;
};

export interface Props {
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  list?: DesItem[];
  mode?: "left" | "right";
  grid?: boolean;
  card?: boolean;
  gapClassName?: string;
}
export default function SectionCard({
  title,
  subtitle,
  children,
  className,
  textClassName,
  list,
  mode,
  grid,
  card,
  gapClassName,
}: Props) {
  const _className = cn(
    styles["section-card"],
    { [styles.right]: mode === "right" },
    { [styles["with-grid"]]: grid },
    { [styles["with-card"]]: card },
    className
  );

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
    <div className={_className}>
      <div className={cn(styles["section-card-text"], textClassName)}>
        {title && <h2>{title}</h2>}
        {subtitle && <p className={styles["subtitle"]}>{subtitle}</p>}
        {list && (
          <div className={styles["list"]}>
            {list?.map((item, index) => {
              const { icon, text, description } = item;
              return (
                <div
                  className={cn(styles["des-item"], {
                    [styles["with-p"]]: !!description,
                  })}
                  key={index}
                >
                  {icon && (
                    <div className={styles.icon}>
                      <Image className="image" src={icon} fill alt={icon} />
                    </div>
                  )}
                  <div className={styles.text}>
                    <span>{text}</span>
                    {description && <p>{description}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={gapClassName || "md:w-12"}></div>
      <animated.div style={imgStyle} className={styles["section-card-content"]}>
        <div ref={triggerRef} />
        {children}
      </animated.div>
    </div>
  );
}
