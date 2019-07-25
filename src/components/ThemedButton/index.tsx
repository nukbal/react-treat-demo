import React, { HTMLAttributes } from 'react';
import { useClassName } from 'react-treat';
import styles from './button.treat';

export default function ThemedButton(props: HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={useClassName(styles)} />
}
