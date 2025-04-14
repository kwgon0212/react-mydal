import React, { ReactNode, useRef } from "react";
import ReactDOM from "react-dom";
import { useEscapeKey } from "./hooks/useEscapeKey";
import { useOutsideClick } from "./hooks/useOutsideClick";
import { getPositionStyle } from "./helps/getPositionStyle";
import CloseIcon from "./icons/Close";

export type ModalOptions = {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
  className?: string;
  backdropStyle?: React.CSSProperties;
  modalStyle?: React.CSSProperties;
  position?:
    | "center"
    | "top-center"
    | "top-left"
    | "top-right"
    | "bottom-center"
    | "bottom-left"
    | "bottom-right";
  onEsc?: boolean;
  onOutsideClick?: boolean;
  closeButton?: "inside" | "outside";
  closeButtonStyle?: {
    width?: number;
    height?: number;
    color?: string;
    icon?: ReactNode;
  };
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  backdropStyle: customBackdropStyle,
  modalStyle: customModalStyle,
  position = "center",
  onOutsideClick = false,
  onEsc = false,
  closeButton,
  closeButtonStyle,
}: ModalOptions) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onOutsideClick, () => onClose(!isOpen));
  useEscapeKey(onEsc, () => onClose(!isOpen));

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        ...defaultBackdropStyle,
        ...getPositionStyle(position),
        ...customBackdropStyle,
      }}
    >
      <div
        ref={modalRef}
        style={{ ...defaultModalStyle, ...customModalStyle }}
        className={className}
      >
        {children}
        {closeButton && (
          <button
            onClick={() => onClose(!isOpen)}
            style={{
              ...CloseButtonStyle,
              top: closeButton === "inside" ? "10px" : "-30px",
              right: closeButton === "inside" ? "10px" : "0",
            }}
          >
            {closeButtonStyle?.icon ? (
              closeButtonStyle?.icon
            ) : (
              <CloseIcon
                width={closeButtonStyle?.width}
                height={closeButtonStyle?.height}
                color={closeButtonStyle?.color}
              />
            )}
          </button>
        )}
      </div>
    </div>,
    document.body
  );
};

const CloseButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "-30px",
  right: 0,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
};

const defaultBackdropStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  zIndex: 1000,
  padding: "40px",
};

const defaultModalStyle: React.CSSProperties = {
  position: "relative",
  background: "#fff",
  borderRadius: "10px",
  padding: "24px",
  width: "600px",
  boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.07)",
};
