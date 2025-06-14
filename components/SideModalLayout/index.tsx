import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";

const SideModalLayout: React.FC<{
  closeModal: () => void;
  children: React.ReactNode;
}> = ({ children, closeModal }) => {
  return (
    <div className={styles.side_modal}>
      <div className={styles.side_modal_head}>
        <Button secondary icon="closeCircle" onClick={closeModal} />
      </div>
      <div className={styles.side_modal_body}>{children}</div>
    </div>
  );
};

export default SideModalLayout;
