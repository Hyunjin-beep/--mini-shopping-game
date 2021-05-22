"use stricts";
//Bring data from a JSON file
// to Array
function intiItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((data) => data.items);
}

// Ref: https://stackoverflow.com/questions/24834818/display-json-array-in-html
function displayItems(items) {
  const box = document.querySelector(`.items`);
  const itemToSring = items.map((item) => turnToHtml(item)).join(``);
  box.innerHTML = itemToSring;
}

function turnToHtml(item) {
  for (var key in item)
    return `<li class="item">
    <img src="${item.img}" alt="${item.color}" class="item-image" />
    <span class="item-detail">${item.gender}, ${item.size}</span>
  </li>`;
}

intiItems()
  .then((items) => {
    displayItems(items);
    // setFiltered(items);
  })
  .catch(console.log);
