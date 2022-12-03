import React from "react";

const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M10.5417 5H5.77174L8.03119 6.75735L10.5417 5ZM4 6.1557V11H12V6.4205L7.96866 9.24244L4 6.1557ZM2 13V3H14V13H2Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EmailIcon;
