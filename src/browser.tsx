import { React, ReactDOM } from 'es-react';
import { App } from './app.tsx';

window.addEventListener('DOMContentLoaded', () => {
  //@ts-ignore
  const el = window.document.getElementById('app');
  //@ts-ignore
  ReactDOM.render(<App/>, el);
})