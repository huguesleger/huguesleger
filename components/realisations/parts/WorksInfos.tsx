import React from "react";

const WorksInfos = ({ props }: any) => {
  const worksInfos = props;
  return (
    <div className="wrap-infos">
      {worksInfos.map((el: any, i: any) => {
        return (
          <div className={i === 0 ? "info-work active" : "info-work"} key={i}>
            <h3 className="work-link">{el.titre}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default WorksInfos;
