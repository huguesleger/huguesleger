import Link from "next/link";
import React from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";

type SocialType = {
  classe?: string;
};

const Social = ({ classe }: SocialType) => {
  return (
    <div className={classe ? `social ${classe}` : "social"}>
      <ul className="inner-social">
        <li className="social-icon">
          <Link className="btn-progress btn-social" href="#">
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
            <Facebook size={18} fill="currentColor" stroke="inherit" />
          </Link>
        </li>
        <li className="social-icon">
          <Link className="btn-progress btn-social" href="#">
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
            <Linkedin size={18} fill="currentColor" stroke="inherit" />
          </Link>
        </li>
        <li className="social-icon">
          <Link className="btn-progress btn-social" href="#">
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
            <Instagram size={18} strokeWidth={1.5} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
