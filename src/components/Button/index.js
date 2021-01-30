import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 15px;
  line-height: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: 3.5px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  outline: 0;
  transition: .2s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .7;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    color: #fdf8e1;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
