import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const InputBase = styled.input`
  width: 100%;
  padding: 0 7px 7px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 1.7px solid #00afda;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  // border-radius: 3.5px;
  font-size: 1rem;
  outline: 0;
  &:focus {
    box-shadow: 0 2px 0 0 #CCCCCC;
  }
`;

function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
