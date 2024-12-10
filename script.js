// Array to hold shopping list items
let shoppingList = [];

// DOM elements
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-btn');
const clearButton = document.getElementById('clear-btn');
const shoppingListContainer = document.getElementById('shopping-list');

// Function to render the shopping list
function renderList() {
  shoppingListContainer.innerHTML = ''; // Clear the current list

  shoppingList.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    if (item.purchased) {
      listItem.classList.add('purchased');
    }

    // Create item name
    const itemText = document.createElement('span');
    itemText.textContent = item.name;

    // Create checkbox container
    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'checkbox-container';

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.purchased;
    checkbox.addEventListener('change', () => togglePurchased(index));

    // Create checkbox label
    const label = document.createElement('label');
    label.textContent = 'Mark as Purchased';

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);

    // Add elements to list item
    listItem.appendChild(itemText);
    listItem.appendChild(checkboxContainer);

    // Add list item to the container
    shoppingListContainer.appendChild(listItem);
  });
}

// Function to add a new item to the list
function addItem() {
  const itemName = itemInput.value.trim();
  if (itemName) {
    shoppingList.push({ name: itemName, purchased: false });
    itemInput.value = ''; // Clear the input field
    renderList();
  }
}

// Function to toggle the purchased state
function togglePurchased(index) {
  shoppingList[index].purchased = !shoppingList[index].purchased;
  renderList();
}

// Function to clear the shopping list
function clearList() {
  shoppingList = [];
  renderList();
}

// Event listeners
addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);
