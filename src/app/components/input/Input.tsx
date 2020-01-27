import * as React from 'react';
import clsx from 'clsx';

export interface InputProps {
  /** The input label */
  label?: string;
  /** When set, it will display the error state */
  error?: boolean;
  /** When set, it will display the success state */
  success?: boolean;
  /** Displays a validation message under the input */
  validationMsg?: string;
  /** Specifies the placement of the icon inside the input */
  iconPosition?: 'left' | 'right';
  /** Specifies the icon to display */
  iconClass?: string;
  /** Renders a smaller or larger sized input and label */
  size?: 'sm' | 'lg';
  /** Render a text element addon before the input */
  before?: React.ReactElement;
  /** Render a text element addon after the input */
  after?: React.ReactElement;
  /** Render a button element along with the input */
  groupButton?: React.ReactElement;
  /** @ignore additional html element props will pass through */
  [x: string]: any;
}

const cloneWithClass = (element, ...args) =>
  React.cloneElement(element, {
    ...element.props,
    className: clsx(...args, element.props.className),
  });

const inputGroup = (before, after, children: React.ReactElement[]) =>
  before || after ? <div className="input-group">{children}</div> : <>{children}</>;

export const Input: React.FC<InputProps> = ({
  id,
  className,
  label,
  error,
  success,
  validationMsg,
  iconPosition,
  iconClass,
  before,
  after,
  groupButton,
  size,
  ...rest
}) => {
  const formGroupClasses = clsx(
    'form-group',
    className,
    success && 'has-success',
    error && 'has-error',
    iconPosition && `has-icon-${iconPosition}`,
  );
  const inputClasses = clsx('form-input', size && `input-${size}`, rest.disabled && 'disabled');

  return (
    <div className={formGroupClasses}>
      {label && (
        <label htmlFor={id} className={clsx('form-label', size && `label-${size}`)}>
          {label}
        </label>
      )}

      {inputGroup(before, after, [
        before && cloneWithClass(before, 'input-group-addon', size && `addon-${size}`),

        <input id={id} key={id} className={inputClasses} type="text" {...rest}></input>,
        iconClass && <i className={clsx('form-icon icon', `icon-${iconClass}`)}></i>,

        after && cloneWithClass(after, 'input-group-addon', size && `addon-${size}`),

        groupButton && cloneWithClass(groupButton, 'input-group-btn', size && `btn-${size}`),
      ])}

      {validationMsg && <p className="form-input-hint">{validationMsg}</p>}
    </div>
  );
};
