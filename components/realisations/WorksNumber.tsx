import React from "react";

const WorksNumber = ({ props }: any) => {
  const totalProject = props.data.allProjets.length;
  return (
    <div className="wrap-number">
      <div className="number-work">
        <span className="number">
          0<span>1</span>
        </span>
        <span className="separate">-</span>
        <span>0{totalProject}</span>
      </div>
    </div>
  );
};

export default WorksNumber;
