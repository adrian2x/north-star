import * as React from "react";
import clsx from "clsx";

export interface TextInputProps {
  /** The input label */
  label?: string;
  /** When set, it will display the error state */
  error?: boolean;
  /** When set, it will display the success state */
  success?: boolean;
  /** Displays a validation message under the input */
  validationMsg?: string;
  /** Specifies the placement of the icon inside the input */
  iconPosition?: "left" | "right";
  /** Specifies the icon to display */
  iconClass?: string;
  /** Renders a smaller or larger sized input and label */
  size?: "sm" | "lg";
  /** @ignore additional html element props will pass through */
  [x: string]: any;
}

export class TextInput extends React.PureComponent<TextInputProps> {
  render() {
    const {
      id,
      className,
      label,
      error,
      success,
      validationMsg,
      iconPosition,
      iconClass,
      size,
      ...restProps
    } = this.props;
    return (
      <div
        className={clsx(
          "form-group",
          className,
          iconPosition && `has-icon-${iconPosition}`,
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className={clsx("form-label", size && `label-${size}`)}
          >
            {label}
          </label>
        )}
        <input
          className={clsx(
            "form-input",
            success && "is-success",
            error && "is-error",
            size && `input-${size}`,
          )}
          type="text"
          id={id}
          {...restProps}
        ></input>
        {iconClass && (
          <i className={clsx("form-icon icon", `icon-${iconClass}`)}></i>
        )}
        {validationMsg && <p className="form-input-hint">{validationMsg}</p>}
      </div>
    );
  }
}
