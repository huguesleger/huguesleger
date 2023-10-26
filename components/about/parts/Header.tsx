import React from "react";

const Header = ({ props }: any) => {
  const about = props;
  return (
    <div>
      <p>{about.titre}</p>
      <p>{about.titre2}</p>
    </div>
  );
};

export default Header;
