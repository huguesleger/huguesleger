import React from "react";

const CompetencesItemsList = ({ props }: any) => {
  const itemsList = props;
  return (
    <div className="inner-item" data-scroll data-scroll-speed="3">
      <span className="number-item">{itemsList.number}</span>
      <i className={itemsList.icon} aria-hidden></i>
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
