"use client";

import CopyEmail from "@/components/CopyEmail";
import React from "react";

const WorksContact = ({ props }: any) => {
  const contact = props;
  return (
    <div className="wrap-contact">
      <CopyEmail>{contact.email}</CopyEmail>
    </div>
  );
};

export default WorksContact;
