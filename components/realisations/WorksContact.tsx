"use client";

import dynamic from "next/dynamic";
import React from "react";

const EmailCopy = dynamic(() => import("../../components/CopyEmail"), {
  ssr: false,
});

const WorksContact = () => {
  return (
    <div className="wrap-contact">
      {/* @ts-expect-error Server Component */}
      <EmailCopy />
    </div>
  );
};

export default WorksContact;
