import { useEffect } from "react";

export function useOutsideClick(
  backgroundRef: React.RefObject<HTMLElement | null>,
  onOutsideClick: boolean,
  callback: () => void
) {
  useEffect(() => {
    if (!backgroundRef) return;

    const handleClick = (e: MouseEvent) => {
      if (
        backgroundRef.current &&
        !backgroundRef.current.contains(e.target as Node)
      ) {
        callback();
      }
    };

    if (onOutsideClick) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [backgroundRef, onOutsideClick, callback]);
}
