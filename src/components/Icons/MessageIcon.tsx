import React from "react";

const MessageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="1"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.1579 9.78947H4.47529L2 11.3611V2H13.1579V9.78947ZM0 0V15L5.05658 11.7895H15.1579V0H0ZM10 5H5V7H10V5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MessageIcon;
