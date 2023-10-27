import React from "react";
import ListCursus from "./ListCursus";

const Cursus = ({ props }: any) => {
  const cursus = props;
  return (
    <section className="section-cursus" data-scroll-section>
      <div className="wrapper">
        <div className="container">
          <div className="inner-title">
            <h2 className="section-title" data-scroll data-scroll-speed="2">
              {cursus.titreCursus}
            </h2>
          </div>
          <div className="list-cursus" data-scroll data-scroll-speed="3">
            {cursus.listeCursus.map((el: any) => {
              return (
                <div className="wrap-list-item" key={el.id}>
                  <ListCursus props={el} data-scroll />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cursus;
