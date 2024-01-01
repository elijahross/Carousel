import React, { useEffect } from "react";
import { lreact, next, java, github, docker } from "./images/index";

const Carousel = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollerInner = document.querySelector(".scroller_inner");
      const scrollerContent = Array.from(scrollerInner.children);
      console.log(scrollerContent);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.append(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className="flex flex-center m-auto justify-center">
      <div className="scroller">
        <div className="scroller_inner">
          <img src={java} alt="java" className="images" />
          <img src={docker} alt="docker" className="images" />
          <img src={next} alt="next" className="images" />
          <img src={github} alt="github" className="images" />
          <img src={lreact} alt="lreact" className="images" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
