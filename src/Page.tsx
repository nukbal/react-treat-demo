import React, { useState } from 'react';
import ThemedButton from './components/ThemedButton';

export default function Page() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div>
      <p>hook page!</p>
      <p>count: {count}</p>
      <ThemedButton onClick={increase}>+</ThemedButton>
      <ThemedButton onClick={decrease}>-</ThemedButton>
    </div>
  );
}
