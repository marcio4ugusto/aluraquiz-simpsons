import React from 'react';
import { ThemeProvider } from 'styled-components';

import db from '../../db.json';

import QuizPage from '../../src/screens/Quiz';

function QuizDaGaleraPage({ name, hard }) {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizPage
        externalQuestions={db.questions}
        externalBg={db.bg}
        playerName={name}
        isHard={hard}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const { name, hard } = context.query;

  return {
    props: {
      name,
      hard,
    },
  };
}

export default QuizDaGaleraPage;
