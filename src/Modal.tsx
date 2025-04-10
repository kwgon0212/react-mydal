import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { useOutsideClick } from "./hooks/useOutsideClick";
import { useEscapeKey } from "./hooks/useEscapeKey";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  backdropStyle?: React.CSSProperties;
  modalStyle?: React.CSSProperties;
  modalPosition?: "center" | "top" | "bottom";
  onEscape?: () => void;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  backdropStyle: customBackdropStyle,
  modalStyle: customModalStyle,
  modalPosition = "center",
  onEscape,
}: ModalProps) => {
  const modalRef = useOutsideClick<HTMLDivElement>(onClose);
  onEscape && useEscapeKey(onEscape);

  if (!isOpen) return null;

  const getPositionStyle = (): React.CSSProperties => {
    switch (modalPosition) {
      case "top":
        return {
          alignItems: "flex-start",
          paddingTop: "20px",
        };
      case "bottom":
        return {
          alignItems: "flex-end",
          paddingBottom: "20px",
        };
      default:
        return {
          alignItems: "center",
        };
    }
  };

  return ReactDOM.createPortal(
    <div
      style={{
        ...defaultBackdropStyle,
        ...getPositionStyle(),
        ...customBackdropStyle,
      }}
    >
      <div
        ref={modalRef}
        style={{ ...defaultModalStyle, ...customModalStyle }}
        className={className}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

const defaultBackdropStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  zIndex: 1000,
};

const defaultModalStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: "8px",
  padding: "24px",
  maxWidth: "500px",
  width: "100%",
};
