import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Bugs from './pages/Bugs';
import Projects from './pages/Projects';
import TestCases from './pages/TestCases';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bugs" element={<Bugs />} />
          <Route path="/test-cases" element={<TestCases />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;