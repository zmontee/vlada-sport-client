"use client";

import React, { useId } from "react";
import clsx from "clsx";
import styles from "./_styles.module.scss";
import { InputMask } from "@react-input/mask";

type TextFieldProps = React.HTMLProps<
  HTMLInputElement | HTMLTextAreaElement
> & {
  title?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  invalid?: boolean;
  required?: boolean;
  placeholder?: string;
  type?: "text" | "password" | "mobile" | "textarea";
};

const TextField: React.FC<TextFieldProps> = ({
  title,
  value,
  onChange,
  required,
  placeholder,
  type,
  invalid,
  className,
  ...rest
}) => {
  const uniqueId = useId();

  return (
    <div
      className={clsx(styles.container, className, {
        [styles.invalid]: invalid,
      })}
    >
      {title ? (
        <label htmlFor={`${uniqueId}_field`} className={styles.label}>
          {title}
          {required ? " *" : ""}
        </label>
      ) : null}
      <div className={styles.input_container}>
        {type === "textarea" ? (
          <textarea
            id={`${uniqueId}_field`}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : type === "mobile" ? (
          <InputMask
            mask="+380 (__) ___-__-__"
            value={value}
            onChange={onChange}
            replacement={{ _: /\d/ }}
            placeholder="+380"
          />
        ) : (
          <input
            id={`${uniqueId}_field`}
            type={type || "text"}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
    </div>
  );
};

export default TextField;
