import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ContactDetail from './pages/ContactDetails';
import Navbar from './components/Navbar';

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/ContactManagement" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contacts/:id" element={<ContactDetail />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
