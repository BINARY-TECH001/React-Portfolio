import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { GithubProvider } from './context/githubContext';
import { DarkModeContextProvider } from './context/darkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <DarkModeContextProvider>
      <App />
      </DarkModeContextProvider>
    </GithubProvider>
  </React.StrictMode>
);

