import React from "react";

const TrendsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="42"
      height="38"
      viewBox="0 0 42 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.667969"
        y="9.96881"
        width="29.1468"
        height="29.1468"
        rx="6.84567"
        transform="rotate(-20 0.667969 9.96881)"
        fill="url(#paint0_linear_50_1502)"
      />
      <g filter="url(#filter0_b_50_1502)">
        <rect
          x="12.3555"
          y="8.47754"
          width="29.1468"
          height="29.1468"
          rx="5.82936"
          fill="white"
          fill-opacity="0.03"
        />
        <rect
          x="12.6471"
          y="8.76921"
          width="28.5635"
          height="28.5635"
          rx="5.5377"
          stroke="white"
          stroke-opacity="0.2"
          stroke-width="0.583333"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.5081 14.8897C26.7033 14.8897 26.0508 15.5422 26.0508 16.3471V29.7546C26.0508 30.5595 26.7033 31.2119 27.5081 31.2119C28.313 31.2119 28.9655 30.5595 28.9655 29.7546V16.3471C28.9655 15.5422 28.313 14.8897 27.5081 14.8897ZM19.0547 21.0105C19.0547 20.2056 19.7072 19.5532 20.512 19.5532C21.3169 19.5532 21.9694 20.2056 21.9694 21.0105V29.7546C21.9694 30.5594 21.3169 31.2119 20.512 31.2119C19.7072 31.2119 19.0547 30.5594 19.0547 29.7546V21.0105ZM33.0449 26.257C33.0449 25.4522 33.6974 24.7997 34.5023 24.7997C35.3071 24.7997 35.9596 25.4522 35.9596 26.257V29.7546C35.9596 30.5595 35.3071 31.212 34.5023 31.212C33.6974 31.212 33.0449 30.5595 33.0449 29.7546V26.257Z"
        fill="url(#paint1_linear_50_1502)"
      />
      <defs>
        <filter
          id="filter0_b_50_1502"
          x="0.69674"
          y="-3.18119"
          width="52.4644"
          height="52.4643"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.82936" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_50_1502"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_50_1502"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_50_1502"
          x1="15.2414"
          y1="9.96881"
          x2="15.2414"
          y2="39.1156"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AE7EFF" />
          <stop offset="1" stop-color="#873FFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_50_1502"
          x1="27.5071"
          y1="21.885"
          x2="27.5071"
          y2="31.212"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.67" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TrendsIcon;