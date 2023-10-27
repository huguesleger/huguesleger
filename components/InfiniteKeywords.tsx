import React from "react";

type InfiniteKeywordsType = {
  title: string;
  icon: string;
};

const InfiniteKeywords = ({
  title,
  icon,
}: InfiniteKeywordsType): JSX.Element => {
  return (
    <span className="wrap-keyword">
      {title}
      <span className="separate-keyword">
        <i className={icon} aria-hidden></i>
      </span>
    </span>
  );
};

export default InfiniteKeywords;
