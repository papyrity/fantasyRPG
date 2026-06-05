const currentQuest = {
    id: 1,
    title: 'First Quest',
    description: 'Gather some materials',
    objectives: [
        {item: 'Wood', current: 0, required: 12},
        {item: 'Stone', current: 0, required: 12}
    ],
    reward: 'Pickaxe',
}

function QuestPanel() {
    return (
        <div className="card">
        <h2>{currentQuest.title}</h2>
        <p>{currentQuest.description}</p>
        <ul>
            {currentQuest.objectives.map((obj) => (
                <li key={obj.item}>
                    {obj.item}: {obj.current}/{obj.required}
                </li>
            ))}
        </ul>
        <p>{currentQuest.reward}</p>
        </div>
    )
}

export default QuestPanel;