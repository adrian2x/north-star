import * as React from 'react';
import clsx from 'clsx';

export interface SelectProps {
  /** When set, it will display the error state */
  error?: boolean;
  /** When set, it will display the success state */
  success?: boolean;
  /** Displays a validation message under the input */
  validationMsg?: string;
  /** Renders a smaller or larger sized input and label */
  size?: 'sm' | 'lg';
  /** @ignore additional html element props will pass through */
  [x: string]: any;
}

export const Select: React.FC<SelectProps> = ({
  className,
  error,
  success,
  validationMsg,
  size,
  ...rest
}) => {
  const selectClasses = clsx(
    'form-select',
    success && 'is-success',
    error && 'is-error',
    size && `select-${size}`,
    rest.disabled && 'disabled',
    className,
  );
  return (
    <>
      <select className={selectClasses} {...rest}>
        {rest.children}
      </select>
      {validationMsg && <p className="form-input-hint">{validationMsg}</p>}
    </>
  );
};
