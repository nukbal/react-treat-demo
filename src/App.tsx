import React, { useState } from 'react';
import { TreatProvider } from 'react-treat';
import Button from './components/Button';
import ClassButton from './components/ClassButton';
import Global from './components/Global';
import { dark, light } from './theme.treat';
import Page from './Page';

export default function App() {
  const [isDark, setDark] = useState(false);
  const [hide, setHide] = useState(false);

  return (
    <TreatProvider theme={isDark ? dark : light}>
      <Global />
      Hello!
      <strong>current : {isDark ? 'dark' : 'light'} mode</strong>
      <Button onClick={() => setDark(!isDark)}>toggle theme</Button>
      <ClassButton onClick={() => setHide(!hide)}>toggle</ClassButton>
      {!hide && <Page />}
    </TreatProvider>
  );
}
