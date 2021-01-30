import styled from 'styled-components';

const InputLevel = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
text-align: right;
`;

InputLevel.Text = styled.span`
  margin-left: 5px;
`;

export default InputLevel;
