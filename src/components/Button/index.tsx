import React, { HTMLAttributes } from 'react';
import styles from './button.treat';

export default function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={styles} />
}
