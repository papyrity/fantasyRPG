import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import InventoryPage from './pages/InventoryPage'
import CraftPage from './pages/CraftPage'
import QuestsPage from './pages/QuestsPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/craft" element={<CraftPage />} />
      <Route path="/quests" element={<QuestsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}

export default App