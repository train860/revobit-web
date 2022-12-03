import React from "react";

const RoundArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.6">
        <circle cx="19" cy="19" r="18.5" stroke="white" />
        <path d="M18 14L22.5 18.5L18 23" stroke="white" stroke-width="2" />
      </g>
    </svg>
  );
};

export default RoundArrowRightIcon;
