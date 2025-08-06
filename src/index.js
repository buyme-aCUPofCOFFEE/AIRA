import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Correct
import App from './App';
import './index.css';

// ✅ This is the correct usage
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
