import * as React from "react";
import { PureComponent } from "react";
import clsx from "clsx";

export interface AvatarProps {
  className?: string;
  initial?: string;
  size?: "xl" | "lg" | "sm" | "xs";
  icon?: string;
  presence?: "online" | "busy" | "away" | "gray";
}

/**
 * Avatars wrap a user profile picture and provides fallback initials.
 */
export class Avatar extends PureComponent<AvatarProps, {}> {
  static defaultProps = {
    disabled: false,
  };

  render() {
    const { props } = this;
    const classList = clsx(
      "avatar",
      props.className,
      props.size && "avatar-" + props.size,
    );
    return (
      <figure className={classList} data-initial={props.initial}>
        {props.children}
      </figure>
    );
  }
}
