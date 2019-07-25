import { useEffect } from 'react';
import { useClassName } from 'react-treat';
import style from './global.treat';

export default function GlobalStyle() {
  const cn = useClassName(style);
  useEffect(() => {
    if (document) document.body.className = cn;
  }, [cn]);
  return null;
}
