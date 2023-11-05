import React from "react";
import Icon from "./layout/Icons";

type InfiniteKeywordsType = {
  title: string;
  icon: any;
  children?: React.ReactNode;
};

const InfiniteKeywords = ({
  title,
  icon,
  children,
}: InfiniteKeywordsType): JSX.Element => {
  return (
    <>
      {children}
      <span className="wrap-keyword">
        {title}
        <span className="separate-keyword">
          <Icon size={32} stroke="inherit" fill="currentColor" name={icon} />
        </span>
      </span>
    </>
  );
};

export default InfiniteKeywords;
