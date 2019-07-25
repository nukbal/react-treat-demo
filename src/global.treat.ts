import { globalStyle } from 'treat';

globalStyle('html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6', {
  margin: 0,
  padding: 0,
});
globalStyle('html', {
  boxSizing: 'border-box',
});
globalStyle('*, *:before, *:after', {
  boxSizing: 'inherit',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Meiryo,Helvetica,"MS PGothic",Arial,sans-serif;',
});
