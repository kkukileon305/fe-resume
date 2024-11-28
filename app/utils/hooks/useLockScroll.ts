import { useEffect } from "react";

const useLockScroll = () => {
  useEffect(() => {
    const originalStyle = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.paddingRight = originalStyle.paddingRight;
    };
  }, []);
};

export default useLockScroll;
