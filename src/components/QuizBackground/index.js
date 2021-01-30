import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-size: 520px;
  background-position: 55% top;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.alternativeBg};
  background-repeat: no-repeat;
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: 320px;
      background-position: right top;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.alternativeBg}),
        url(${({ backgroundImage }) => backgroundImage});
        background-repeat: no-repeat;
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
