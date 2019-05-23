import React from 'react';
import PropTypes from 'prop-types';
import { renderToString } from 'react-dom/server';
import Label from '../label';

const replaceAll = (target, strReplace, callback) => {
  // See http://stackoverflow.com/a/3561711/556609
  // eslint-disable-next-line no-useless-escape
  const esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const reg = new RegExp(esc, 'ig');
  return target.replace(reg, callback);
};

const labelStyle = { fontSize: 'inherit', padding: 0, margin: 0 };

const getHighlightedText = ({
  children,
  filter,
  insensitive,
  ...props
}) => {
  if (filter === undefined || filter === '') {
    return {
      __html: children,
    };
  }
  let text = children;
  if (insensitive) {
    text = replaceAll(text, filter, match => renderToString(
      <Label
        style={labelStyle}
        {...props}
      >
        {match}
      </Label>,
    ));
  } else {
    text = text.split(filter).join(renderToString(
      <Label
        style={labelStyle}
        {...props}
      >
        {filter}
      </Label>,
    ));
  }
  return { __html: text };
};
const Highlight = ({
  children,
  filter,
  insensitive,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  theme,
  ...otherProps
}) => (
  <span
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={
      getHighlightedText({
        children,
        filter,
        insensitive,
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      })
    }
    {...otherProps}
  />
);

Highlight.propTypes = {
  filter: PropTypes.string,
  insensitive: PropTypes.bool,
};

Highlight.defaultProps = {
  filter: undefined,
  insensitive: false,
};

export default Highlight;
