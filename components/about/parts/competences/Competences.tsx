import InfiniteKeywords from "@/components/InfiniteKeywords";
import React from "react";

const Competences = ({ props }: any) => {
  const skills = props;
  return (
    <section className="section-competences" data-scroll-section>
      <div className="infinite-keywords">
        <span className="keywords">
          {skills.titreCompetence.map((el: any) => {
            return (
              <InfiniteKeywords title={el.titre} icon={el.icon} key={el.id} />
            );
          })}
        </span>
        <span className="keywords">
          {skills.titreCompetence.map((el: any) => {
            return (
              <InfiniteKeywords title={el.titre} icon={el.icon} key={el.id} />
            );
          })}
        </span>
      </div>
    </section>
  );
};

export default Competences;
