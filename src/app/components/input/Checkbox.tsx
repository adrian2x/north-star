import * as React from 'react';
import clsx from 'clsx';

export interface CheckboxProps {
  /** The input label */
  label?: string;
  /** When set, it will display the error state */
  error?: boolean;
  /** When set, it will display the success state */
  success?: boolean;
  /** Displays a validation message under the input */
  hint?: string;
  /** Renders a smaller or larger sized input and label */
  size?: 'sm' | 'lg';
  /** Changes the checkbox to indeterminate state */
  indeterminate?: boolean;
  /** Make the components inline in one row */
  inline?: boolean;
  /** Switch the type of checkbox to a toggle switch or a radio button */
  variant: 'checkbox' | 'switch' | 'radio';
  /** @ignore additional html element props will pass through */
  [x: string]: any;
}

export class Checkbox extends React.PureComponent<CheckboxProps, {}> {
  static defaultProps = {
    variant: 'checkbox',
    indeterminate: false,
  };

  _element = null;

  componentDidMount() {
    this._element.indeterminate = this.props.indeterminate;
  }
  render() {
    const {className, label, error, success, hint, size, inline, variant, ...rest} = this.props;
    const cls = clsx(
      `form-${variant}`,
      inline && 'form-inline',
      success && 'has-success is-success',
      error && 'has-error is-error',
      size && `input-${size}`,
      rest.disabled && 'disabled',
      className,
    );
    return (
      <label className={cls}>
        <input type="checkbox" {...rest} ref={this._getRef} />
        <i className="form-icon"></i> {label}
        {hint && <p className="form-input-hint">{hint}</p>}
      </label>
    );
  }

  _getRef = (node: HTMLElement) => {
    this._element = node;
    if (this.props.ref) {
      this.props.ref(node);
    }
  };
}
