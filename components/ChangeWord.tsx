import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type ChangeWordType = {
  words: string[];
};

const ChangeWord = ({ words }: ChangeWordType): JSX.Element => {
  const changeWord = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
    });
    tl.to(".word-1", {
      delay: 0.5,
      duration: 0.5,
      opacity: 0,
      y: "-10px",
    })
      .set(".word-2", {
        display: "block",
        opacity: 0,
        y: "10px",
      })
      .to(".word-2", {
        duration: 1,
        ease: "Power3.easeOut",
        y: "0",
        opacity: 1,
      })
      .to(".word-2", {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        y: "-10px",
        ease: "Power1.easeInOut",
      })
      .set(".word-3", {
        display: "block",
        opacity: 0,
        y: "10px",
      })
      .to(".word-3", {
        duration: 1,
        ease: "Power3.easeOut",
        y: "0",
        opacity: 1,
      })
      .to(".word-3", {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        y: "-10px",
        ease: "Power1.easeInOut",
      })
      .set(".word-4", {
        display: "block",
        opacity: 0,
        y: "10px",
      })
      .to(".word-4", {
        duration: 1,
        ease: "Power3.easeOut",
        y: "0",
        opacity: 1,
      })
      .to(".word-4", {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        y: "-10px",
        ease: "Power1.easeInOut",
      })
      .set(".word-1", {
        display: "block",
        opacity: 0,
        y: "10px",
      })
      .to(".word-1", {
        duration: 1,
        ease: "Power3.easeOut",
        y: "0",
        opacity: 1,
      });
  }, []);

  return (
    <div className="change-word" ref={changeWord}>
      {words.map((el, i) => {
        i = 1 + i;
        return (
          <div key={i} className={`word word-${i}`}>
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default ChangeWord;
