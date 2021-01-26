import React, { useState } from 'react';
import { useRouter } from 'next/router';

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
  );
}

export default NameInput;
