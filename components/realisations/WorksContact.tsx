"use client";

import React from "react";
import CopyEmail from "../CopyEmail";

const WorksContact = () => {
  return (
    <div className="wrap-contact">
      {typeof window !== "undefined" && <CopyEmail />}
    </div>
  );
};

export default WorksContact;
