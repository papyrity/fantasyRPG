//Sample inventory
const playerInventory = {
    wood: 0,
    stone: 13,
    iron: 6,
    fish: 5
}

const allRecipes = [
    {
        id: 1,
        name: 'Fishing Rod',
        description: 'A simple wooden fishing rod.',
        requires: { wood: 2, iron: 1 }
    },
    {
        id: 2,
        name: 'Wooden Pickaxe',
        description: 'The basic level of pickaxe.',
        requires: { wood: 12 }
    },
    {
        id: 3,
        name: 'Campfire',
        description: 'An effort to stay warm.',
        requires: { wood: 4, stone: 10 }
    }
]

function CraftableRecipes(recipe, inventory) {
    for (const ingredient in recipe.requires) {
        const needed = recipe.requires[ingredient]
        const have = inventory[ingredient] || 0

        if(have < needed){
            return false
        }
    }
    return true;
}

function CraftablesPanel() {
    const craftables = allRecipes.filter((recipe) => CraftableRecipes(recipe, playerInventory))

    return (
        <div className="card">
            <h2>Craftable Items</h2>
            {craftables.length === 0 ? (
                <p>Nothing ready to craft.</p>
            ) : (
                <ul>
                    {craftables.map((recipe) => (
                        <li key={recipe.id}>{recipe.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CraftablesPanel