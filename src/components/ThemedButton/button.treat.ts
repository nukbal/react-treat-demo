import { style } from 'treat';

export const base = style({
  outline: 'none',
  padding: '0.325rem 0.625rem',
});

export const themed = style(({ primary }) => ({
  background: primary,
}));
