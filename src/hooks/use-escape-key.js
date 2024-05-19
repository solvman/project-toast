import React from "react";

function useEscapeKey(onEscape) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onEscape();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onEscape]);
}

export default useEscapeKey;
