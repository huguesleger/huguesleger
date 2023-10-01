"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-content container">
          <Link className="logo" href="/">
            <Image src="/logo-hl.svg" width={30} height={30} alt="HL" />
          </Link>
          <div className="wrap-name">
            <div className="inner-name">
              <div className="name">Hugues Leger</div>
              <div className="name-hover">Hugues Leger</div>
            </div>
          </div>
          <div className="wrap-nav">
            <nav className="nav-items">
              <Link
                href="/realisations"
                className={
                  pathname === "/realisations"
                    ? "item-link item-active"
                    : "item-link"
                }
              >
                <div className="item-wrap">
                  <span className="item">Réalisations</span>
                  <span className="item-hover">Réalisations</span>
                </div>
              </Link>
              <Link
                href="/a-propos"
                className={
                  pathname === "/a-propos"
                    ? "item-link item-active"
                    : "item-link"
                }
              >
                <div className="item-wrap">
                  <span className="item">A propos</span>
                  <span className="item-hover">A propos</span>
                </div>
              </Link>
            </nav>
            <button className="btn btn-effect btn-theme-mode">
              <span>
                <span>mode sombre</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
