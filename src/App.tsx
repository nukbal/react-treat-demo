import React, { useState } from 'react';
import { TreatProvider } from 'react-treat';
import Button from './components/Button';
import ThemedButton from './components/ThemedButton';
import Global from './components/Global';
import { dark, light } from './theme.treat';

function Sample() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div>
      <p>count: {count}</p>
      <ThemedButton onClick={increase}>+</ThemedButton>
      <ThemedButton onClick={decrease}>-</ThemedButton>
    </div>
  );
}

export default function App() {
  const [isDark, setDark] = useState(false);

  return (
    <TreatProvider theme={isDark ? dark : light}>
      <Global />
      Hello!
      <strong>current : {isDark ? 'dark' : 'light'} mode</strong>
      <Button onClick={() => setDark(!isDark)}>toggle theme</Button>
      <Sample />
    </TreatProvider>
  );
}
