import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  forwardRef,
  PropsWithChildren,
} from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & {
      fill?: boolean;
      accent?: boolean;
      outline?: boolean;
    }
  >
>(({ outline, fill, accent, className, ...others }, ref) => (
  <button
    ref={ref}
    className={clsx(
      "rounded-lg py-[21px] px-5 sm:px-[43px] inline-flex items-center w-fit",
      {
        "border border-white": outline,
        "text-black": fill,
        "bg-[var(--primary)]": accent,
        "bg-white": fill && !accent,
      },
      className
    )}
    {...others}
  />
));

Button.displayName = "Button";
