// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App';
import configureStore from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
