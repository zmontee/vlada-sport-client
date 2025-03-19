import React from "react";
import styles from "./_styles.module.scss";
import clsx from "clsx";

const FolderBlock: React.FC<{
  spacePosition: "topLeft" | "topRight";
  backgroundImg: string;
  className?: string;
  spaceNode?: React.ReactNode;
  children: React.ReactNode;
}> = ({ spacePosition, backgroundImg, spaceNode, children, className }) => {
  return (
    <div
      className={clsx(styles.folder_wrapper, styles[spacePosition], className)}
    >
      <div className={styles.mask_container}>
        {/* Background image that will be masked */}
        <div className={styles.background_container}>
          <img src={backgroundImg} alt="" className={styles.background} />
        </div>

        {/* Tab content */}
        <div className={styles.tab_content}>{spaceNode}</div>

        {/* Main content */}
        <div className={styles.folder_content}>{children}</div>
      </div>
    </div>
  );
};

export default FolderBlock;
