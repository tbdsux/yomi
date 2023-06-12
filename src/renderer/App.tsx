import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './routes/dashboard';
import Notes from './routes/notes';
import Settings from './routes/settings';
import { useNotesStore } from './stores/useNotesStores';

export default function App() {
  const initData = useNotesStore((s) => s.initData);

  useEffect(() => {
    initData();
  }, []);

  return (
    <Router>
      <div className="flex items-start">
        <Sidebar />

        <div className="py-4 w-full ml-[50px]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/:id" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
