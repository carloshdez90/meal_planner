# Diet Planner

An interactive web application to help users plan and visualize their daily meals and snacks. The Diet Planner provides a clean, modern interface with support for light and dark modes, and allows users to browse meal plans by day and meal type, as well as view all snack options.

## Features

- **Meal Plan Browser:** Select a day and meal type (breakfast, lunch, dinner) to view detailed meal suggestions.
- **Snack Explorer:** View all snack options, filterable by AM/PM.
- **Dark Mode:** Toggle between light and dark themes for comfortable viewing.
- **Responsive Design:** Works well on both desktop and mobile devices.
- **Modular Codebase:** CSS and JavaScript are separated for maintainability. Meal data is stored in a dedicated module.

## Project Structure

```
meal_planner/
├── index.html         # Main HTML file
├── styles.css         # Application styles (light/dark mode, layout, components)
├── app.js             # Main JavaScript logic (UI, event handling, rendering)
├── allPlansData.js    # Meal and snack data (exported as a module)
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- (Recommended) A local web server for ES6 module support (see below)

### Running Locally
1. **Clone or download this repository.**
2. **Start a local web server** in the project directory. For example, with Python 3:
   ```sh
   python3 -m http.server 8000
   ```
3. **Open your browser** and navigate to `http://localhost:8000` (or the port you chose).
4. The Diet Planner app should load and be fully functional.

> **Note:** ES6 module imports (`import ... from ...`) require serving files over HTTP. Opening `index.html` directly as a file (`file://`) will not work in most browsers.

## Usage
- Select a day from the dropdown menu.
- Choose a meal type (Breakfast, Lunch, Dinner) to view the meal for that day.
- Click "View All Snacks" to see all snack options, and filter by AM/PM if desired.
- Use the moon/sun button in the header to toggle dark mode.

## Customization
- **Meal Data:** Edit `allPlansData.js` to update or expand meal/snack options.
- **Styles:** Modify `styles.css` for color schemes, layout, or component appearance.
- **Logic:** Extend or change UI behavior in `app.js`.

## Credits
- Developed by Carlos Hernández
- Crafted with the help of Gemini and GPT-4
- [GitHub Repository](https://github.com/carloshdez90/meal_planner)

---

Feel free to contribute or suggest improvements! 