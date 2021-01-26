import React, { useState, useEffect } from 'react';

function QuizPage() {
  const [name, setName] = useState('');

  useEffect(() => {
    function getQueryName() {
      const params = (new URL(window.location)).searchParams;
      const nameFromQuery = params.get('name');
      setName(nameFromQuery);
    }
    getQueryName();
  }, []);

  return (
    <h2>
      Olá
      {' '}
      {name}
      !
    </h2>
  );
}

export default QuizPage;
