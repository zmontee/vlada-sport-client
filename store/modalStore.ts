import React from "react";
import { create } from "zustand";

export type ModalPosition = "center" | "top" | "bottom" | "left" | "right";

export type ModalConfig = {
  position: ModalPosition;
  closeOnOverlayClick?: boolean;
  width?: string | number;
  height?: string | number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

export type ModalState = {
  isOpen: boolean;
  isClosing: boolean;
  component: React.ReactNode | null;
  config: ModalConfig;
  open: (component: React.ReactNode, config?: Partial<ModalConfig>) => void;
  startClosing: () => void;
  finishClosing: () => void;
  close: () => void;
};

const defaultConfig: ModalConfig = {
  position: "center",
  closeOnOverlayClick: true,
  width: "fit-content",
  height: "fit-content",
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  isClosing: false,
  component: null,
  config: defaultConfig,
  open: (component, config = {}) =>
    set({
      isOpen: true,
      isClosing: false,
      component,
      config: { ...defaultConfig, ...config },
    }),
  startClosing: () => set({ isClosing: true }),
  finishClosing: () =>
    set({ isOpen: false, isClosing: false, component: null }),
  close: () => set({ isOpen: false, isClosing: false, component: null }),
}));
