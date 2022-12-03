import React from "react";

const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M11 6.6875C11 6.9577 10.8564 7.50634 10.393 8.33893C9.95647 9.12336 9.34848 9.96284 8.70027 10.7574C8.28802 11.2628 7.87353 11.7329 7.5 12.139C7.12647 11.7329 6.71198 11.2628 6.29973 10.7574C5.65152 9.96284 5.04353 9.12336 4.60698 8.33893C4.14364 7.50634 4 6.9577 4 6.6875C4 4.58722 5.62967 3 7.5 3C9.37033 3 11 4.58722 11 6.6875ZM13 6.6875C13 9.82862 7.5 15 7.5 15C7.5 15 2 9.82862 2 6.6875C2 3.54638 4.46243 1 7.5 1C10.5376 1 13 3.54638 13 6.6875ZM7.5 8C8.32843 8 9 7.32843 9 6.5C9 5.67157 8.32843 5 7.5 5C6.67157 5 6 5.67157 6 6.5C6 7.32843 6.67157 8 7.5 8Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LocationIcon;
