import * as React from 'react';

import {Checkbox, CheckboxProps} from './Checkbox';

export type SwitchProps = Omit<CheckboxProps, 'variant'>;

export const Switch: React.FC<SwitchProps> = props => {
  return <Checkbox variant="switch" {...props} />;
};
