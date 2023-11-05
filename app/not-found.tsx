"use client";

import ChangeWord from "@/components/ChangeWord";
import InfiniteKeywords from "@/components/InfiniteKeywords";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, Circle, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="page-error">
      <div className="wrapper">
        <div className="container">
          <div className="wrap-content">
            <div className="error-infos">
              <ChangeWord
                words={["Oups !", "C'est la mouise !", "Mince !", "F*** !"]}
              />
              <p>une erreur est survenue</p>
            </div>
            <div className="infinite-keywords">
              <span className="keywords">
                <InfiniteKeywords
                  title={"Cette page n'existe pas"}
                  icon={"circle"}
                >
                  <span className="wrap-keyword keyword-bold">
                    404
                    <span className="separate-keyword">
                      <Circle size={32} stroke="inherit" fill="currentColor" />
                    </span>
                  </span>
                </InfiniteKeywords>
              </span>
              <span className="keywords">
                <InfiniteKeywords
                  title={"Cette page n'existe pas"}
                  icon={"circle"}
                >
                  <span className="wrap-keyword keyword-bold">
                    404
                    <span className="separate-keyword">
                      <Circle size={32} stroke="inherit" fill="currentColor" />
                    </span>
                  </span>
                </InfiniteKeywords>
              </span>
            </div>
            <div className="wrap-btn">
              <Link href="/" className="btn-arrow btn-md">
                <span className="btn-text">
                  <span className="icon">
                    <Home size={24} strokeWidth={1.25} stroke="currentColor" />
                  </span>
                  Retour à l&apos;accueil
                </span>
                <span className="icon-arrow">
                  <ArrowUpRight size={24} strokeWidth={1.25} stroke="#fff" />
                </span>
              </Link>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
