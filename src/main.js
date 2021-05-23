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

// When clicking logo, it will display all items
// When clicking a button, items will be filtered by the button's type or color
// Ref: https://pathas.tistory.com/213
//      https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
function setFiltered(items) {
  const logo = document.querySelector(`.logo`);
  const buttons = document.querySelector(".buttons");

  logo.addEventListener("click", (event) => onButtonClicked(event));
  buttons.addEventListener("click", (event) => onButtonClicked(event));

  const onButtonClicked = (event) => {
    const type = event.target.dataset.key;
    const value = event.target.dataset.value;

    if (type === undefined || value === undefined) {
      alert("Please click a proper button");
    } else {
      // JSON data file(items)'s type == button's value
      // for example, in items, a type is pants.
      // and button's value is also pants.
      const filtered = items.filter((item) => item[type] === value);
      displayItems(filtered);
    }
  };
}

intiItems()
  .then((items) => {
    displayItems(items);

    setFiltered(items);
  })
  .catch(console.log);
