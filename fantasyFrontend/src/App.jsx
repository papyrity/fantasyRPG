import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import InventoryPage from './pages/InventoryPage'
import CraftPage from './pages/CraftPage'
import QuestsPage from './pages/QuestsPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import LoginPage from './pages/LoginPage'

//sample login user: alice pass: hunter2

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="craft" element={<CraftPage />} />
        <Route path="quests" element={<QuestsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App