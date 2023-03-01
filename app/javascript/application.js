// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <App />
      </Provider>
  </React.StrictMode>,
);

