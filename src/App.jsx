import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AssetProvider } from './contexts/AssetContext';
import { ResourceProvider } from './contexts/ResourceContext';
import { SearchProvider } from './contexts/SearchContext';
import { CollaborationProvider } from './contexts/CollaborationContext';
import { UserProvider } from './contexts/UserContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AssetManagement from './pages/AssetManagement';
import ResourceOrganization from './pages/ResourceOrganization';
import Collaboration from './pages/Collaboration';
import Search from './pages/Search';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AssetProvider>
          <ResourceProvider>
            <SearchProvider>
              <CollaborationProvider>
                <UserProvider>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                      path="/dashboard"
                      element={
                        <ProtectedRoute>
                          <Dashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/asset-management"
                      element={
                        <ProtectedRoute>
                          <AssetManagement />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/resource-organization"
                      element={
                        <ProtectedRoute>
                          <ResourceOrganization />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/collaboration"
                      element={
                        <ProtectedRoute>
                          <Collaboration />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/search"
                      element={
                        <ProtectedRoute>
                          <Search />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <ProtectedRoute>
                          <Profile />
                        </ProtectedRoute>
                      }
                    />
                  </Routes>
                  <Footer />
                </UserProvider>
              </CollaborationProvider>
            </SearchProvider>
          </ResourceProvider>
        </AssetProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;