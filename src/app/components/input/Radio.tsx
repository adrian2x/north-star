import * as React from 'react';

import {Checkbox, CheckboxProps} from './Checkbox';

export type RadioProps = Omit<CheckboxProps, 'variant'>;

export const Radio: React.FC<RadioProps> = props => {
  return <Checkbox type="radio" variant="radio" {...props} />;
};
