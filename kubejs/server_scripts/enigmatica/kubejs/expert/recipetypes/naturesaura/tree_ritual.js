events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                inputs: [
                    { item: 'ars_nouveau:warding_stone' },
                    { item: 'ars_nouveau:warding_stone' },
                    { item: 'naturesaura:token_joy' },
                    { item: 'naturesaura:gold_leaf' },
                    { item: 'thermal:ice_charge' },
                    { item: 'thermal:lightning_charge' },
                    { item: 'thermal:earth_charge' },
                    { item: 'minecraft:fire_charge' }
                ],
                output: 'naturesaura:nature_altar',
                sapling: 'quark:yellow_blossom_sapling',
                id: 'nature_altar'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'naturesaura:tree_ritual',
            ingredients: recipe.inputs,
            sapling: { item: recipe.sapling },
            output: { item: recipe.output },
            time: 500
        });
        if (recipe.id) {
            re.id(`naturesaura:tree_ritual/${recipe.id}`);
        }
    });
});
