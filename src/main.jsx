import { createRoot } from 'react-dom/client';
import App from './App';
import '@/styles/main.scss';
import '@/styles/color.scss';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
