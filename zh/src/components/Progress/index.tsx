import cn from "classnames";

import styles from "./Progress.module.scss";
interface Props {
  className?: string;
  percent: number;
  width: number;
  color: string;
  strokeWidth: number;
  pathStrokeWidth?: number;
  pathStrokeColor?: string;
  children?: React.ReactNode;
}
export default function Progress(props: Props) {
  const { className, percent = 0, width, color, strokeWidth } = props;
  const radius = (width - strokeWidth) / 2;
  const perimeter = Math.PI * 2 * radius;
  const center = width / 2;
  const cls = `my-circle`;
  const svgCls = `${cls}-svg`;

  return (
    <div
      className={cn(styles[`${cls}-wrapper`], className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      style={{ width, height: width }}
    >
      <svg viewBox={`0 0 ${width} ${width}`} className={styles[`${svgCls}`]}>
        <circle
          className={styles[`${cls}-mask`]}
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={props.pathStrokeWidth || strokeWidth}
          style={{
            stroke: props.pathStrokeColor || "#e5e5e5",
          }}
        />
        <circle
          className={styles[`${cls}-path`]}
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          style={{
            stroke: color,
            strokeDasharray: perimeter,
            strokeDashoffset:
              (percent > 100 ? 100 : 1 - percent / 100) * perimeter,
          }}
        />
      </svg>
      {props.children}
    </div>
  );
}
