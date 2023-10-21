"use client";

import dynamic from "next/dynamic";
import React from "react";

const Copy = dynamic(() => import("../CopyEmail"), {
  ssr: false,
});

const WorksContact = () => {
  return (
    <div className="wrap-contact">
      {/* @ts-expect-error Server Component */}
      <Copy />
    </div>
  );
};

export default WorksContact;
