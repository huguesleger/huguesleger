"use client";

import { useAppContext } from "@/app/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { X } from "lucide-react";
import { useEffect } from "react";

const Header = (): JSX.Element => {
  const pathname = usePathname();

  const { pageName, setValueCarousel, valueCarousel } = useAppContext();

  const router = useRouter();

  // const handleClick = () => {
  //   router.back();
  // };

  useEffect(() => {
    valueCarousel;
    console.log(valueCarousel, "valueHeader");
  }, []);

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-content container">
          <Link className="logo" href="/">
            <Image src="/logo-hl.svg" width={30} height={30} alt="HL" />
          </Link>
          {pageName === "page-realisation-detail" ? (
            <div className="close-project">
              <Link className="btn-progress" href="/realisations">
                <svg
                  aria-hidden="true"
                  className="progress"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                >
                  <path
                    className="progress-path"
                    d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
                    pathLength="1"
                  />
                </svg>
                <X size={18} stroke="currentColor" />
              </Link>
            </div>
          ) : (
            <div className="wrap-name">
              <div className="inner-name">
                <div className="name">Hugues Leger</div>
                <div className="name-hover">Hugues Leger</div>
              </div>
            </div>
          )}
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
                  <span className="item-circle"></span>
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
                  <span className="item-circle"></span>
                </div>
              </Link>
            </nav>
            {/* <button className="btn btn-effect btn-theme-mode">
              <span>
                <span>mode sombre</span>
              </span>
            </button> */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
