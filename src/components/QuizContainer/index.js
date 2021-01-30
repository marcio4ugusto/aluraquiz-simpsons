import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 420px;
  padding-top: 128px;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    margin-top: 36px;
    padding: 15px;
  }
`;

export default QuizContainer;
