# Shopping List Project

This project is an interactive shopping list web application where users can add items, mark them as purchased, and clear the entire list. It's built with HTML, CSS, and JavaScript, and provides a clean user interface for managing a shopping list.

## Features

- **Add Items**: Enter an item in the input field and click the "Add" button to add it to the list.
- **Mark as Purchased**: Check the checkbox next to an item to mark it as purchased (strikethrough styling will be applied).
- **Clear List**: Remove all items from the shopping list by clicking the "Clear List" button.
- **Dynamic Updates**: The list updates dynamically as items are added or marked as purchased.

## Project Structure

```
Shopping List
├── index.html       # Main HTML file
├── style.css        # Stylesheet for the application
└── script.js        # JavaScript logic for interactivity
```

## Getting Started

### Prerequisites

To run this project, you need a web browser (e.g., Chrome, Firefox, Edge) installed on your computer.

### Installation

1. **Download or Clone the Repository**:
   ```
   git clone <repository-url>
   ```

2. **Open the Project**:
   Navigate to the project directory and open the `index.html` file in your browser.

## Code Overview

### HTML (index.html)

This file provides the structure of the web application. It includes:

- An input field for entering items.
- Buttons for adding items and clearing the list.
- A container for displaying the shopping list.

### CSS (style.css)

The stylesheet defines the appearance of the shopping list application, including:

- Styling for the input field, buttons, and list items.
- Hover effects for buttons.
- Styling for purchased items (strikethrough and color change).

### JavaScript (script.js)

This file contains the logic for the application, including:

- Adding items to the list.
- Marking items as purchased.
- Clearing the list.
- Dynamically rendering the shopping list in the browser.

### Key Functions

- **renderList()**: Updates the shopping list display.
- **addItem()**: Adds a new item to the shopping list.
- **togglePurchased(index)**: Toggles the purchased status of an item.
- **clearList()**: Clears all items from the shopping list.

## How to Use

1. Open the `index.html` file in your browser.
2. Enter an item in the input field and click the "Add" button.
3. Mark items as purchased by checking the checkbox.
4. Clear the list by clicking the "Clear List" button.


