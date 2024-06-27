import { useState } from "react";
import { useEffect } from "react";

export const useInfiniteScroll = () => {
  const [reachedBottom, setReachedBottom] = useState(false);

  const detectPageBottom = () => {
    console.log(window.scrollY, window.innerHeight, document.body.scrollHeight);
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 5) {
      setReachedBottom(true);
    } else {
      setReachedBottom(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", detectPageBottom);

    return () => document.removeEventListener("scroll", detectPageBottom);
  }, []);

  return reachedBottom;
};
