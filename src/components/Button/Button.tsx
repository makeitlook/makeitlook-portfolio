import React, { forwardRef } from "react";

const typeClassMap: Record<string, string> = {
  warning:
    "inline-flex justify-center rounded-md bg-helpers-error-button px-4 py-4 text-sm text-elements-primary-contrastText font-semibold shadow-sm ring-1 ring-inset ring-helpers-error-button hover:bg-helpers-error-button-hover items-center",
  undo: "inline-flex justify-center rounded-md bg-neutral-dimmed px-4 py-4 text-sm font-semibold ring-1 ring-border-shadow ring-neutral-shadow hover:bg-button-hover items-center text-text-secondary",
  continue:
    "inline-flex justify-center rounded-md bg-elements-primary-main px-4 py-4 text-sm font-semibold text-elements-primary-contrastText hover:bg-elements-primary-shadow items-center",
  remove:
    "inline-flex justify-center rounded-md bg-helpers-remove-button px-4 py-4 text-sm text-elements-primary-contrastText font-semibold shadow-sm ring-1 ring-inset ring-helpers-remove-button hover:bg-helpers-remove-button-hover items-center",
  text: "inline-flex justify-center rounded-md px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary items-center",
  icon: "inline-flex justify-center items-center rounded-md p-2 text-text-secondary hover:text-text-primary hover:bg-button-hover",
};

const iconClassName = "flex items-center w-4 h-4";

interface ButtonProps {
  type?: keyof typeof typeClassMap;
  extraClassNames?: string;
  children?: React.ReactNode;
  icon?: React.ReactElement;
  disabled?: boolean;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  [x: string]: any;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      type = "continue",
      children,
      icon,
      extraClassNames = "",
      disabled = false,
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    const classes = `${typeClassMap[type] ?? ""} ${extraClassNames} ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`;

    const IconWithSpacing = icon
      ? React.cloneElement(icon, {
          className: `${iconClassName} ${icon.props.className || ""}`,
        })
      : null;

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => {
      if (disabled) e.preventDefault();
      onClick?.(e);
    };

    if (href) {
      return (
        <a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          onClick={handleClick}
          {...props}
        >
          {IconWithSpacing && (
            <span className={children ? "mr-2" : ""}>{IconWithSpacing}</span>
          )}
          {children}
        </a>
      );
    }

    return (
      <button
        type="button"
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={classes}
        onClick={handleClick}
        {...props}
      >
        {IconWithSpacing && (
          <span className={children ? "mr-2" : ""}>{IconWithSpacing}</span>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
