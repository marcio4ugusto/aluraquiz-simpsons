import React from 'react';
import { ThemeProvider } from 'styled-components';

import db from '../../db.json';

import QuizPage from '../../src/screens/Quiz';

function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizPage
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  );
}

export default QuizDaGaleraPage;
