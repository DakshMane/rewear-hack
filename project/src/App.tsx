import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './types/AuthContext';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { BrowsePage } from './pages/BrowsePage';
import { ItemDetailPage } from './pages/ItemDetailPage';
import { DashboardPage } from './pages/DashboardPage';
import { AddItemPage } from './pages/AddItemPage';
import { AdminPage } from './pages/AdminPage';

function App() {
  return (
    
      
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/item/:id" element={<ItemDetailPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/add-item" 
                element={
                  <PrivateRoute>
                    <AddItemPage />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/admin" 
                element={
                  <PrivateRoute adminOnly>
                    <AdminPage />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      
    
  );
}

export default App;