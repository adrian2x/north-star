import * as React from "react";
import { PureComponent } from "react";
import clsx from "clsx";

export interface ButtonProps {
  /** The type of button */
  className?: "btn-primary" | "btn-link" | "btn-clear" | string;
  /** Buttons can have multiple sizes like `sm`, `lg` or `block` for a full-width */
  size?: "sm" | "lg" | "block";
  /** Button states indicate something has happened */
  state?: "success" | "error";
  /** Set `active` as true for active button state */
  active?: boolean;
  /** Disables button states and interactions */
  disabled?: boolean;
  /** Contents of the buttons */
  children?: React.ReactNode;
}

/**
 * Wraps an html `button` element.
 */
export class Button extends PureComponent<ButtonProps, {}> {
  static defaultProps = {
    disabled: false,
  };

  render() {
    const { props } = this;
    const classList = clsx(
      "btn",
      props.className,
      props.size && "btn-" + props.size,
      props.state && "btn-" + props.state,
      props.active && "active",
      props.disabled && "disabled",
    );
    return (
      <button className={classList} disabled={props.disabled}>
        {props.children}
      </button>
    );
  }
}
