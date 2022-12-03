import React from "react";

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M9 3.5C9 4.32843 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5ZM11 3.5C11 5.433 9.433 7 7.5 7C5.567 7 4 5.433 4 3.5C4 1.567 5.567 0 7.5 0C9.433 0 11 1.567 11 3.5ZM5 9C2.23858 9 0 11.2386 0 14V15H2V14C2 12.3431 3.34315 11 5 11H10C11.6569 11 13 12.3431 13 14V15H15V14C15 11.2386 12.7614 9 10 9H5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UserIcon;
