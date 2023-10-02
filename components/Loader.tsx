"use client";

import React from "react";
import ChangeWord from "./ChangeWord";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="loader-inner">
          <div className="wrap-words">
            <ChangeWord
              words={[
                "hugues Leger",
                "Hello",
                "Salut",
                "Créatif Développeur front",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
