import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children,
  className,
  disabled,
  href,
  onClick,
  size,
  type,
  variant,
}) => {
  const classes = classNames(
    'btn',
    {
      'btn-lg': size === 'large',
      'btn-sm': size === 'small',
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-link': variant === 'link',
    },
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['large', 'small']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'link']),
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  size: 'medium',
  disabled: false,
};

export default Button;