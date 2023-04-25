const listEl = document.querySelector('#categories');
const itemEl = listEl.children;

console.log(`Number of categories: ${itemEl.length}`);

Array.from(itemEl).forEach((item) => {
    const category = item.querySelector('h2').textContent;
    const liCount = item.querySelectorAll('li').length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${liCount}`);
});
