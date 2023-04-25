const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const makeIngredientsList = (ingredients) => {
    ingredients.forEach((ingredient) => {
        const itemEl = document.createElement('li');
        itemEl.textContent = ingredient;
        itemEl.classList.add('item');

        listEl.append(itemEl);
    });
};

makeIngredientsList(ingredients);
