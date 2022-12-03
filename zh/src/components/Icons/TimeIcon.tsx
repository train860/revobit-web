import React from "react";

const TimeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M7.5 12C9.98528 12 12 9.98528 12 7.5C12 5.01472 9.98528 3 7.5 3C5.01472 3 3 5.01472 3 7.5C3 9.98528 5.01472 12 7.5 12ZM7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14ZM8.5 5V7H10V9H8.5H7H6.5V5H8.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TimeIcon;
