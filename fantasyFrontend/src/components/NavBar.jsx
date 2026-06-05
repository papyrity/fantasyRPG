import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext'
import './NavBar.css'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, loading, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    setIsOpen(false)
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">My Game</Link>
        
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/quests">Quests</Link></li>
          <li><Link to="/craft">Craft</Link></li>
        </ul>
        
        <div className="navbar-auth">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
          {loading ? null : (user ? (
            <>
              <button className="navbar-avatar-button" onClick={() => setIsOpen(!isOpen)}>
                <span className="navbar-avatar-placeholder">
                    {user.username[0].toUpperCase()}
                </span>
                <span>{user.username}</span>
              </button>
              {isOpen && (
                <ul className="navbar-dropdown">
                  <li><Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link></li>
                  <li><Link to="/settings" onClick={() => setIsOpen(false)}>Settings</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              )}
            </>
          ) : (
            <Link to="/login">Log In</Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar