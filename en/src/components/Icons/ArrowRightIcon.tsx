import React from "react";

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="1"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.08586 7.50008L5.29297 3.70718L6.70718 2.29297L11.9143 7.50008L6.70718 12.7072L5.29297 11.293L9.08586 7.50008Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowRightIcon;
