import SplittingWrapperWord from "@/components/splitting/SplittingWrapperWord";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const Infos = ({ props }: any) => {
  const infos = props;
  return (
    <section
      className={`project-infos ${infos.colorText}`}
      data-scroll-section
      style={{ backgroundColor: infos.colorSection.hex }}
    >
      <div className="wrapper">
        <div className="container">
          <div className="wrap-content">
            <div className="wrap-title">
              <div className="inner-title">
                <h1 className="title-project">
                  <SplittingWrapperWord>{infos.titre}</SplittingWrapperWord>
                </h1>
              </div>
            </div>
            <div className="wrap-infos">
              {infos.siteWeb && (
                <div className="inner-info">
                  <p className="name-info">Site web</p>
                  <Link
                    href={`https://${infos.siteWeb}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-website"
                  >
                    <span className="link-text">Voir le site</span>
                    <span className="link-arrow">
                      <ArrowUpRight
                        size={24}
                        strokeWidth={1.25}
                        stroke="#fff"
                      />
                    </span>
                  </Link>
                </div>
              )}
              <div className="inner-info">
                <p className="name-info">Intervention</p>
                <p>{infos.intervention}</p>
              </div>
              <div className="inner-info">
                <p className="name-info">Année</p>
                <p>{infos.annee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infos;
