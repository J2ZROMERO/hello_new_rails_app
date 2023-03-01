// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
