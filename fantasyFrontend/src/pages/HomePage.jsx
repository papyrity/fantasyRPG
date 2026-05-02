import QuestPanel from "../components/QuestPanel"
import CraftablesPanel from "../components/CraftablesPanel"
import RecentActivity from "../components/RecentActivity"

function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <QuestPanel />
            <CraftablesPanel />
            <RecentActivity />
        </div>
    )
}

export default HomePage