import HoverReveal from "@/components/HoverReveal";
import React from "react";

const ListCursus = ({ props }: any) => {
  const list = props;
  return (
    <HoverReveal
      classe={"list-item"}
      widthImage={150}
      heightImage={200}
      image={list.image.url}
    >
      <div className="title-list">
        <h3>{list.titre}</h3>
        <p className="school-list">{list.ecole}</p>
      </div>
      <div className="year-list">
        <p>{list.annee}</p>
      </div>
    </HoverReveal>
  );
};

export default ListCursus;
