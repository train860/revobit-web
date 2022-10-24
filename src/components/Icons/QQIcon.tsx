import React from "react";

const QQIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.69 9.78906C12.3775 8.78516 12.0181 7.94141 11.4654 6.56055C11.5513 2.93359 10.0435 0 6.57088 0C3.05916 0 1.58455 2.99219 1.6783 6.56055C1.12362 7.94336 0.766194 8.78125 0.453694 9.78906C-0.210368 11.9277 0.0044751 12.8125 0.168538 12.832C0.5201 12.875 1.53768 11.2227 1.53768 11.2227C1.53768 12.1797 2.02987 13.4277 3.09627 14.3281C2.58065 14.4863 1.42244 14.9121 1.69783 15.3789C1.92049 15.7559 5.52987 15.6191 6.57088 15.502C7.6119 15.6191 11.2213 15.7559 11.4439 15.3789C11.7193 14.9141 10.5592 14.4863 10.0455 14.3281C11.1119 13.4258 11.6041 12.1777 11.6041 11.2227C11.6041 11.2227 12.6217 12.875 12.9732 12.832C13.1392 12.8105 13.3541 11.9258 12.69 9.78906Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default QQIcon;
