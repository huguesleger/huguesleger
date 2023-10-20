import Image from "next/image";
import React from "react";

const WorksProgress = () => {
  return (
    <div className="wrap-progress">
      <Image
        src="/realisations-round.svg"
        width="90"
        height="90"
        alt="réalisations"
      />
    </div>
  );
};

export default WorksProgress;
