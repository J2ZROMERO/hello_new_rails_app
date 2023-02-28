// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>,
);

