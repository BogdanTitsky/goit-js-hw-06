const listEl = document.querySelector('#categories');
const itemEl = listEl.children;

console.log(`Number of categories: ${itemEl.length}`);

Array.from(itemEl).forEach((item) => {
    const category = item.firstElementChild.textContent;
    const liCount = item.lastElementChild.children.length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${liCount}`);
});
