import * as React from 'react';
import clsx from 'clsx';

export interface TextAreaProps {
  /** The input label */
  label?: string;
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

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  className,
  label,
  error,
  success,
  validationMsg,
  size,
  ...rest
}) => {
  const formClass = clsx('form-group', className, success && 'has-success', error && 'has-error');
  const inputClass = clsx('form-input', size && `input-${size}`, rest.disabled && 'disabled');
  return (
    <div className={formClass}>
      {label && (
        <label htmlFor={id} className={clsx('form-label', size && `label-${size}`)}>
          {label}
        </label>
      )}
      <textarea className={inputClass} id={id} {...rest}></textarea>
      {validationMsg && <p className="form-input-hint">{validationMsg}</p>}
    </div>
  );
};
