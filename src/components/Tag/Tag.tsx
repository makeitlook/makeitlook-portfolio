import React from "react";
import Link from "next/link";

interface TagProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
  className?: string;
}

const baseClass =
  "px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300";
const defaultClass =
  "bg-background-secondary text-text-tertiary border-border-dimmed";
const activeClass =
  "bg-elements-primary-main text-elements-primary-contrastText border-elements-primary-main";

const Tag: React.FC<TagProps> = ({
  children,
  href,
  onClick,
  selected = false,
  className = "",
}) => {
  const classes = `${baseClass} ${
    selected ? activeClass : defaultClass
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return <span className={classes}>{children}</span>;
};

export default Tag;
