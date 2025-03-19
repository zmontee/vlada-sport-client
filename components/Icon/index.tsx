import React from "react";
import clsx from "clsx";
import triangle from "@/assets/icons/triangle.svg";
import link from "@/assets/icons/link.svg";
import styles from "./_styles.module.scss";

export type IconName = "triangle" | "link";

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  triangle,
  link,
};

type IconProps = React.SVGProps<SVGSVGElement> & { name: IconName };

const Icon: React.FC<IconProps> = ({ name, className, ...rest }) => {
  const IconComponent = icons[name];

  return IconComponent ? (
    <IconComponent className={clsx(styles.icon, className)} {...rest} />
  ) : null;
};

export default Icon;
