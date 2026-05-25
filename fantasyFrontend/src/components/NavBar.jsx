import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    const { user, loading, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        await logout();
        setIsOpen(false)
        navigate('/login')
    }

    return (
        <nav>
        <div>
            <Link to='/About'>About</Link>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/inventory'>Inventory</Link>
                </li>
                <li>
                    <Link to='/quests'>Quests</Link>
                </li>
                <li>
                    <Link to='/craft'>Craft</Link>
                </li>
            </ul>

            {loading ? null : (user ? (
                 <div>
                <button onClick={() => setIsOpen(!isOpen)}><img src='/avatar.png' alt='User menu' /><span>{user.username}</span></button>
                {isOpen && (
                <ul>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/settings'>Settings</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
                )}
            </div>
            ) : (
            <Link to='/login'>Log In</Link>
            ))}
        </div>
        </nav>
    )
}

export default NavBar