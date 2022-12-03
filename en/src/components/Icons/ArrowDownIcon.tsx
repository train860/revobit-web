import React from "react";

const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.5"
        d="M1.5 1L6.5 6L11.5 1"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  );
};

export default ArrowDownIcon;
