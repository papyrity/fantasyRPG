import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import InventoryPage from './pages/InventoryPage'
import CraftPage from './pages/CraftPage'
import QuestsPage from './pages/QuestsPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import ProtectedRoute from './components/ProtectedRoute'

//sample login user: alice pass: hunter2

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
        <Layout />
        </ProtectedRoute>
        }>
        <Route index element={<HomePage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="craft" element={<CraftPage />} />
        <Route path="quests" element={<QuestsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path='register' element={<RegistrationPage />} />
    </Routes>
  )
}

export default App