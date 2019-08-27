import React from 'react';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles } from './styles';

const Input = ({
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  theme,
  small,
  medium,
  large,
  ...otherProps
}) => (
  <input
    css={[
      styles.inputStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      }),
      styles.getFontSizeStyle({
        small,
        medium,
        large,
      }),
    ]}
    {...otherProps}
  />
);

Input.propTypes = {
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
};

Input.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

export default Input;