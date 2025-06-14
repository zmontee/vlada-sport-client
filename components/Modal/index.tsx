"use client";
import React, { useRef } from "react";
import { useModalStore } from "@/store/modalStore";
import type { ModalPosition } from "@/store/modalStore";
import styles from "./_styles.module.scss";

export const Modal: React.FC = () => {
  const { isOpen, isClosing, component, config, startClosing, finishClosing } =
    useModalStore();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (config.closeOnOverlayClick && e.target === modalRef.current) {
      if (["left", "right"].includes(config.position)) {
        startClosing();
      } else {
        finishClosing();
      }
    }
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      finishClosing();
    }
  };

  if (!isOpen && !isClosing) return null;

  const getPositionClass = (position: ModalPosition): string => {
    if (isClosing && ["left", "right"].includes(position)) {
      return `${styles[`position_${position}`]} ${styles.closing}`;
    }

    switch (position) {
      case "bottom":
        return styles.position_bottom;
      case "left":
        return styles.position_left;
      case "right":
        return styles.position_right;
      default:
        return styles.position_center;
    }
  };

  const modalStyle = {
    width: config.width,
    height: config.height,
    top: config.top,
    left: config.left,
    right: config.right,
    bottom: config.bottom,
  };

  return (
    <div
      className={styles.modal_overlay}
      ref={modalRef}
      onClick={handleOverlayClick}
    >
      <div
        className={`${styles.modal_content} ${getPositionClass(config.position)}`}
        style={modalStyle}
        onAnimationEnd={handleAnimationEnd}
      >
        {component}
      </div>
    </div>
  );
};
