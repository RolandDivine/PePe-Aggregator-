import React, { useState } from 'react';
import { registerPePe } from '../services/pepeService';

function PePeForm() {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerPePe(name, score);
      // Clear form inputs after successful registration
      setName('');
      setScore('');
    } catch (error) {
      console.error('Error registering PePe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Score:
        <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
      </label>
      <button type="submit">Register PePe</button>
    </form>
  );
}

export default PePeForm;
