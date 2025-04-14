import { useEffect } from "react";

export function useEscapeKey(onEsc: boolean, callback: () => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        callback();
      }
    };

    if (onEsc) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onEsc, callback]);
}
