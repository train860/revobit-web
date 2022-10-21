import React from "react";

const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="11"
      height="14"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 5.6875C10 6.21524 9.7563 6.94565 9.26682 7.82521C8.79074 8.68069 8.14299 9.57088 7.47513 10.3895C6.8103 11.2045 6.14276 11.9277 5.64007 12.4482C5.59176 12.4982 5.54502 12.5463 5.5 12.5924C5.45499 12.5463 5.40824 12.4982 5.35993 12.4482C4.85724 11.9277 4.1897 11.2045 3.52487 10.3895C2.85701 9.57088 2.20926 8.68069 1.73318 7.82521C1.2437 6.94565 1 6.21524 1 5.6875C1 3.0668 3.04605 1 5.5 1C7.95395 1 10 3.0668 10 5.6875Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default LocationIcon;
