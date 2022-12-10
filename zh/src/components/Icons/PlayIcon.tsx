import React from "react";

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="9" cy="9" r="8" stroke="white" stroke-width="2" />
      <path
        d="M10.5 8.13397C11.1667 8.51888 11.1667 9.48113 10.5 9.86603L9 10.7321C8.33333 11.117 7.5 10.6358 7.5 9.86603L7.5 8.13397C7.5 7.36417 8.33333 6.88305 9 7.26795L10.5 8.13397Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlayIcon;
