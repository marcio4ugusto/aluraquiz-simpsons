import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  function handleNameInput(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
    console.log('Fazendo uma submissão por meio do react');
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={submit}>
              <input
                onChange={handleNameInput}
                placeholder="Qual o seu nome?"
              />
              <button
                type="submit"
                disabled={name.length === 0}
              >
                Jogar
                {' '}
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marcio-bernardes/aluraquiz-vacinacao" />
    </QuizBackground>
  );
}

export default Home;
