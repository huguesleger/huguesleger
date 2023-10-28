"use client";

import React, { useRef } from "react";

type CopyEmailType = {
  children: React.ReactNode;
};

const CopyEmail = ({ children }: CopyEmailType) => {
  const refCopy = useRef<any>(null);
  const refWrap = useRef<any>(null);

  const handleClick = (e: any) => {
    if (!refCopy) return;
    const copy = refCopy.current.innerHTML;
    navigator.clipboard.writeText(copy);
    if (!refWrap) return;
    refWrap.current.classList.add("copied");
  };

  const handleMouseLeave = () => {
    refWrap.current.classList.remove("copied");
  };

  return (
    <div
      ref={refWrap}
      className="wrap-copy"
      data-cursor
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      <div className="inner-label">
        <span className="copy-label">Copy to clipboard</span>
        <span className="copied-label">Copied</span>
      </div>
      <p className="copy-email" ref={refCopy}>
        {children}
      </p>
    </div>
  );
};

export default CopyEmail;
