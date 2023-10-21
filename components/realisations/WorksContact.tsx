"use client";

import React, { Suspense } from "react";
import CopyEmail from "../CopyEmail";

const WorksContact = () => {
  return (
    <div className="wrap-contact">
      <Suspense fallback={null}>
        <CopyEmail />
      </Suspense>
    </div>
  );
};

export default WorksContact;
