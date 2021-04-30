events.listen('recipes', (event) => {
    const recipes = [
        {
            filter: { id: 'create:crafting/kinetics/mechanical_piston' },
            toReplace: '#minecraft:planks',
            replaceWith: ['minecraft:piston', 'minecraft:sticky_piston']
        },
        {
            filter: { id: 'thermal:machine_pyrolyzer' },
            toReplace: 'minecraft:blaze_rod',
            replaceWith: '#forge:gems/coal_coke'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
});
