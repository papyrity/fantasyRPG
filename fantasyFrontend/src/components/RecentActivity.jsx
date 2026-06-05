//placeholder data until backend is ready
const recentsList = [
    {id: 1, message: 'Crafted Wooden Pickaxe', timestamp: '2 minutes ago'},
    {id: 2, message: 'Chopped Wood', timestamp: '3 minutes ago'},
    {id: 3, message: 'Went fishing', timestamp: '10 minutes ago'}
];

function RecentActivity() {
    return (
        <div className="card">
            <h2>Recent Activity</h2>
            {recentsList.length === 0 ? (
                <p>No recent activity</p>
            ) : (
                <ul>
                    {recentsList.map((activity) => (
                        <li key={activity.id}>{activity.message}...{activity.timestamp}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default RecentActivity;