import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export const Form = styled.form`
  width: 100vh;
  > input {
    padding: .75rem .875rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-top-left-radius: 3.5px;
    border-bottom-left-radius: 3.5px;
    &:hover {
      opacity: 0.8;
    };
    &:focus {
      opacity: 0.8;
    }
  }
  > button {
    cursor: pointer;
    padding: .75rem .875rem;
    color: ${({ theme }) => theme.colors.defaultText};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-top-right-radius: 3.5px;
    border-bottom-right-radius: 3.5px;
    background-color: ${({ theme }) => theme.colors.secondary};
    &:hover {
      opacity: 0.8;
    };
    &:focus {
      opacity: 0.8;
    }
  }
`;

function NameInput() {
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
    <Form onSubmit={submit}>
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
    </Form>
  );
}

export default NameInput;
