import { Link } from 'react-router-dom'
import { useState } from 'react'

function NavBar(){
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav>
        <div>
            <Link to='/About'>About</Link>

            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/inventory'>Inventory</Link>
                </li>
                <li>
                    <Link to='/quests'>Quests</Link>
                </li>
            </ul>

            <div>
                <button onClick={() => setIsOpen(!isOpen)}><img src='/avatar.png' alt='User menu' /></button>
                {isOpen && (
                <ul>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/settings'>Settings</Link>
                    </li>
                    <li>
                        <button onClick={() => {/* Handle logout */}}>Logout</button>
                    </li>
                </ul>
                )}
            </div>
        </div>
        </nav>
    )
}