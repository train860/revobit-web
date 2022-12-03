import React from "react";

const GroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <circle cx="7.5" cy="3.5" r="2.5" stroke="white" stroke-width="2" />
        <path
          d="M14 15V14C14 11.7909 12.2091 10 10 10H5C2.79086 10 1 11.7909 1 14V15"
          stroke="white"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7511 4.97904C11.4976 5.70768 11.0621 6.35109 10.499 6.85484C10.8161 6.94928 11.152 7 11.4998 7C13.4328 7 14.9998 5.433 14.9998 3.5C14.9998 1.567 13.4328 0 11.4998 0C11.152 0 10.8161 0.0507193 10.499 0.145164C11.0621 0.648908 11.4976 1.29232 11.7511 2.02096C12.4599 2.14051 12.9998 2.7572 12.9998 3.5C12.9998 4.2428 12.4599 4.85949 11.7511 4.97904Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default GroupIcon;
