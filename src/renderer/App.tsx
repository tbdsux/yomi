import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './routes/dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
