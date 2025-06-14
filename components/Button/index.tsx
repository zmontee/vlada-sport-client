import React, { forwardRef } from "react";
// import Icon, { IconName } from "@/components/Icon";
import clsx from "clsx";
import styles from "./_styles.module.scss";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  secondary?: boolean;
  empty?: boolean;
  icon?: IconName;
  iconOnly?: boolean;
  iconNode?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconClassName?: string;
  divider?: boolean;
  tooltip?: string;
  to?: string;
  dataUrl?: string;
  target?: string;
};

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      secondary = false,
      empty = false,
      icon = null,
      iconOnly = false,
      iconNode = null,
      iconPosition = "right",
      iconClassName,
      divider = false,
      type,
      children = null,
      to,
      dataUrl,
      target,
      ...rest
    },
    ref,
  ) => {
    const withIcon = !!icon || !!iconNode;

    return to ? (
      <Link href={to} data-url={dataUrl} target={target}>
        <button
          {...rest}
          ref={ref}
          className={clsx(styles.button, className, {
            [styles.with_icon]: withIcon,
            [styles.icon_only]: iconOnly || (withIcon && !children),
            [styles.left_icon]: withIcon && iconPosition === "left",
            [styles.right_icon]: withIcon && iconPosition === "right",
            [styles.secondary]: secondary,
            [styles.slide_from_left]: iconPosition === "left",
            [styles.slide_from_right]: iconPosition === "right",
          })}
        >
          {withIcon && iconPosition === "left" ? (
            <div className={styles.icon_wrapper}>
              {icon ? (
                <Icon
                  name={icon}
                  className={clsx(styles.icon, iconClassName)}
                />
              ) : (
                iconNode
              )}
            </div>
          ) : null}
          {children}
          {withIcon && iconPosition === "right" ? (
            <div className={styles.icon_wrapper}>
              {icon ? (
                <Icon
                  name={icon}
                  className={clsx(styles.icon, iconClassName)}
                />
              ) : (
                iconNode
              )}
            </div>
          ) : null}
        </button>
      </Link>
    ) : (
      <button
        {...rest}
        ref={ref}
        type={type}
        className={clsx(styles.button, className, {
          [styles.with_icon]: withIcon,
          [styles.icon_only]: iconOnly || (withIcon && !children),
          [styles.left_icon]: withIcon && iconPosition === "left",
          [styles.right_icon]: withIcon && iconPosition === "right",
          [styles.secondary]: secondary,
          [styles.empty]: empty,
          [styles.slide_from_left]: iconPosition === "left",
          [styles.slide_from_right]: iconPosition === "right",
        })}
      >
        {withIcon && iconPosition === "left" ? (
          <div className={styles.icon_wrapper}>
            {icon ? (
              <Icon name={icon} className={clsx(styles.icon, iconClassName)} />
            ) : (
              iconNode
            )}
          </div>
        ) : null}
        {children}
        {withIcon && iconPosition === "right" ? (
          <div className={styles.icon_wrapper}>
            {icon ? (
              <Icon name={icon} className={clsx(styles.icon, iconClassName)} />
            ) : (
              iconNode
            )}
          </div>
        ) : null}
      </button>
    );
  },
);

export default Button;
