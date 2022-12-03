import React from "react";

const BuildingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="1"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 0H5V6H0V15H5H7H15V0ZM7 13H13V2H7V6V13ZM5 13V8H2V13H5ZM9 5H11V7H9V5ZM11 9H9V11H11V9Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BuildingIcon;
