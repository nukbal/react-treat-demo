import React, { HTMLAttributes, Component } from 'react';
import { base, themed } from './button.treat';
import { resolveClassName } from 'treat';
import withTheme from '../../utils/withTheme';

class ClassButton extends Component<HTMLAttributes<HTMLButtonElement> & { theme: any }> {
  render() {
    const { className = '', theme, ...rest } = this.props;
    const themeClass = resolveClassName(theme, themed);
    return <button className={[base, themeClass, className].join(' ')} {...rest} />
  }
}

export default withTheme(ClassButton);
