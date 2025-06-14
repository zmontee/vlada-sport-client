import { useModalStore, ModalConfig } from "@/store/modalStore";
import React from "react";

export const useModal = () => {
  const { open, startClosing, close, config } = useModalStore();

  const closeModal = () => {
    // Якщо модальне вікно має бокову позицію, запускаємо анімацію закриття
    if (["left", "right"].includes(config.position)) {
      startClosing();
    } else {
      // Інакше закриваємо одразу
      close();
    }
  };

  return {
    openModal: (component: React.ReactNode, config?: Partial<ModalConfig>) => {
      open(component, config);
    },
    closeModal,
  };
};
