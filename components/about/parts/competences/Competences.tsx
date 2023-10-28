import InfiniteKeywords from "@/components/InfiniteKeywords";
import React from "react";
import CompetencesItems from "./CompetencesItems";
import CompetencesItemsList from "./CompetencesItemsList";

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
      <div className="wrapper">
        <div className="container">
          <div className="wrap-items">
            {skills.listeCompetence.map((el: any) => {
              return <CompetencesItems key={el.id} props={el} />;
            })}
            {skills.listeCompetenceItems.map((el: any) => {
              return <CompetencesItemsList key={el.id} props={el} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
