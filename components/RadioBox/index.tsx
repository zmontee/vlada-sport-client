import React from "react";
import clsx from "clsx";
import styles from "./_styles.module.scss";

type RadioBoxProps = {
  title?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RadioButton = React.forwardRef<HTMLInputElement, RadioBoxProps>(
  ({ title, className, disabled, ...rest }, ref) => (
    <label
      className={clsx(styles.radiobox_label, className, {
        [styles.disabled]: disabled,
      })}
    >
      <input
        ref={ref}
        type="radio"
        className={styles.radiobox}
        disabled={disabled}
        {...rest}
      />
      {title ? <span className={styles.title}>{title}</span> : null}
    </label>
  ),
);

export default RadioButton;
