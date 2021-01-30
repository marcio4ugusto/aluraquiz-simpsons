import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';

import InputLevel from '../src/components/InputLevel';
import Link from '../src/components/Link';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [isLevelHard, setIsLevelHard] = useState(false);

  function submit(e) {
    e.preventDefault();
    router.push(`/quiz?name=${name}&hard=${isLevelHard}`);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.22 }}
          initial={{ scale: 25 }}
          animate={{ scale: 1 }}
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={submit}>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome para jogar.."
                name="nomeDoUsuario"
                value={name}
                autoFocus="true"
              />
              <Button
                type="submit"
                disabled={name.length === 0}
              >
                Jogar
              </Button>
            </form>

            <form style={{ marginTop: '16px' }}>
              <InputLevel>
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={isLevelHard}
                  onChange={(e) => setIsLevelHard(e.target.checked)}
                />
                <InputLevel.Text>
                  Habilitar level hard
                </InputLevel.Text>
              </InputLevel>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.22, duration: 0.1 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={name.length === 0 ? '/' : `/quiz/${projectName}___${githubUser}`}
                      isDisabled={name.length === 0}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.section}
          transition={{ delay: 0.22, duration: 0.2 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marcio-bernardes/aluraquiz-simpsons" />
    </QuizBackground>
  );
}

export default Home;
