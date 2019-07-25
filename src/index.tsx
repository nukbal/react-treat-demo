import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import './global.treat';

const App = lazy(() => import('./App'));

render(<Suspense fallback="loading..."><App /></Suspense>, document.getElementById('root')!);
