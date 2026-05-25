import { useAuth } from "../contexts/AuthContext";

const activities = [
    {id: 'mine', label: 'Mine'},
    {id: 'chop', label: 'Chop'},
    {id: 'fish', label: 'Fish'},
    {id: 'forage', label: 'Forage'},
]

function ActivityBar() {
    const { user } = useAuth()
    if(!user) return null
    return (
        <div>
            {activities.map((activity) => (
                <button
                    key={activity.id}
                    onClick={() => console.log(`${activity.label} Clicked`)}
                >
                    {activity.label}
                </button>
            ))}
        </div>
    )
}

export default ActivityBar;