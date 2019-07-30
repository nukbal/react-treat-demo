import React from 'react';
import { useTheme } from 'react-treat';

export default function withTheme(Component: any) {
  return function (props: any) {
    const theme = useTheme();
    return <Component theme={theme} {...props} />;
  }
}
