import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, InputField, InputLabel } from './Input.styles';

const Input = ({ type, label, value, onChange, placeholder, name, error }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <InputWrapper focused={focused} error={error}>
      <InputLabel focused={focused}>{label}</InputLabel>
      <InputField
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </InputWrapper>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  error: false,
};

export default Input;