import { ModalOptions } from "../Modal";

export const getPositionStyle = (
  position: ModalOptions["position"]
): React.CSSProperties => {
  switch (position) {
    case "top-center":
      return {
        justifyContent: "center",
        alignItems: "flex-start",
      };
    case "top-left":
      return {
        justifyContent: "flex-start",
        alignItems: "flex-start",
      };
    case "top-right":
      return {
        justifyContent: "flex-end",
        alignItems: "flex-start",
      };
    case "bottom-center":
      return {
        justifyContent: "center",
        alignItems: "flex-end",
      };
    case "bottom-left":
      return {
        justifyContent: "flex-start",
        alignItems: "flex-end",
      };
    case "bottom-right":
      return {
        justifyContent: "flex-end",
        alignItems: "flex-end",
      };
    default:
      return {
        alignItems: "center",
        justifyContent: "center",
      };
  }
};
