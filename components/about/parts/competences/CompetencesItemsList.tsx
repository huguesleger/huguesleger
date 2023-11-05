import Icon from "@/components/layout/Icons";
import React from "react";

const CompetencesItemsList = ({ props }: any) => {
  const itemsList = props;
  return (
    <div className="inner-item" data-scroll data-scroll-speed="3">
      <span className="number-item">{itemsList.number}</span>
      <span className="icon-item">
        <Icon
          size={24}
          name={itemsList.icon}
          fill="none"
          stroke="currentColor"
        />
      </span>
      <h3 className="title-item">{itemsList.titre}</h3>
      <div className="list-items">
        <ul>
          {itemsList.listeServiceLeft.map((item: any) => {
            return <li key={item.id}>{item.texte}</li>;
          })}
        </ul>
        <ul>
          {itemsList.listeServiceCenter.map((item: any) => {
            return <li key={item.id}>{item.texte}</li>;
          })}
        </ul>
        <ul>
          {itemsList.listeServiceRight.map((item: any) => {
            return <li key={item.id}>{item.texte}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CompetencesItemsList;
