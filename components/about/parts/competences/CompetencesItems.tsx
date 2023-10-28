import React from "react";
import { StructuredText } from "react-datocms/structured-text";

const CompetencesItems = ({ props }: any) => {
  const items = props;
  return (
    <div className="inner-item" data-scroll data-scroll-speed="3">
      <span className="number-item">{items.number}</span>
      <i className={items.icon} aria-hidden></i>
      <h3 className="title-item">{items.titre}</h3>
      <StructuredText data={items.description} />
    </div>
  );
};

export default CompetencesItems;
