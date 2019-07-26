import React, { HTMLAttributes } from 'react';
import { useClassName } from 'react-treat';
import { base, themed } from './button.treat';

export default function ThemedButton(props: HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={[base, useClassName(themed)].join(' ')} />
}
