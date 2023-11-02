import Image from "next/image";
import React from "react";

const WorksProgress = () => {
  return (
    <div className="wrap-progress">
      <svg className="text-progress" viewBox="0 0 300 300">
        <defs>
          <path
            id="progress-circle"
            d="M150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <text className="circle-text">
          <textPath startOffset="0" xlinkHref="#progress-circle" aria-label="">
            Scroll to explore -
          </textPath>
          <textPath
            startOffset="50%"
            xlinkHref="#progress-circle"
            aria-label=""
          >
            Scroll to explore -
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default WorksProgress;
