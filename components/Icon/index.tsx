import React from "react";
import clsx from "clsx";
import triangle from "@/assets/icons/triangle.svg";
import link from "@/assets/icons/link.svg";
import program from "@/assets/icons/program.svg";
import shoppingCart from "@/assets/icons/shopping-cart.svg";
import arrowCircleLeft from "@/assets/icons/arrow-circle-left.svg";
import arrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import edit from "@/assets/icons/edit.svg";
import trash from "@/assets/icons/trash.svg";
import lock from "@/assets/icons/lock.svg";
import closeCircle from "@/assets/icons/close-circle.svg";
import styles from "./_styles.module.scss";

export type IconName =
  | "triangle"
  | "link"
  | "program"
  | "shoppingCart"
  | "arrowCircleLeft"
  | "arrowCircleRight"
  | "edit"
  | "trash"
  | "lock"
  | "closeCircle";

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  triangle,
  link,
  program,
  shoppingCart,
  arrowCircleLeft,
  arrowCircleRight,
  edit,
  trash,
  lock,
  closeCircle,
};

type IconProps = React.SVGProps<SVGSVGElement> & { name: IconName };

const Icon: React.FC<IconProps> = ({ name, className, ...rest }) => {
  const IconComponent = icons[name];

  return IconComponent ? (
    <IconComponent className={clsx(styles.icon, className)} {...rest} />
  ) : null;
};

export default Icon;
