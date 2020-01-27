import * as React from 'react';
import clsx from 'clsx';

export interface LabelProps {
  /** Set the label text color */
  variant?: 'primary' | 'secondary';
  /** Renders label with colors */
  state?: 'success' | 'error' | 'warning';
  /** Set rounded borders */
  rounded?: boolean;
  /** @ignore additional html element props will pass through */
  [x: string]: any;
}

/**
 * Labels are formatted text tags for highlighted, informative information.
 */
export const Label: React.FC<LabelProps> = ({variant, state, rounded, ...rest}) => {
  return (
    <span
      className={clsx(
        'label',
        rest.className,
        variant && `label-${variant}`,
        state && `label-${state}`,
        rounded && `label-rounded`,
      )}
    >
      {rest.children}
    </span>
  );
};
