import { useState, useEffect } from "react";

export function useIsInQuery(query, activeReload) {
  const [isMobile, setIsMobile] = useState();

  useEffect(
    function() {
      if (window.matchMedia(query).matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    },
    [query]
  );
  if (activeReload) {
    window.addEventListener("resize", function() {
      window.location.reload();
    });
  }

  return isMobile;
}
