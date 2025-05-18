/**
 * Diet Planner Application
 * 
 * This JavaScript file contains all the functionality for the Diet Planner application.
 * It includes:
 * - Data management for meal plans
 * - UI interaction handling
 * - Dark mode functionality
 * - Meal and snack display logic
 */

import { allPlansData } from './allPlansData.js';

// ===== Data Management =====

/**
 * Contains all meal plan data organized by month and type
 * @type {Object}
 */

// ===== DOM Elements =====

/**
 * Cache of frequently used DOM elements
 */
const DOM = {
    daySelector: document.getElementById('daySelector'),
    mealTypeButtons: document.getElementById('mealTypeButtons'),
    mealResultDiv: document.getElementById('mealResult'),
    showMeriendasBtn: document.getElementById('showMeriendasBtn'),
    meriendasContainer: document.getElementById('meriendasContainer'),
    meriendaFilterControls: document.getElementById('meriendaFilterControls'),
    meriendasListDiv: document.getElementById('meriendasList'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    body: document.body
};

// ===== State Management =====

/**
 * Application state
 */
const state = {
    activeMealTypeButton: null,
    activeMeriendaFilterButton: null
};

// ===== Dark Mode Management =====

/**
 * Applies the specified theme to the application
 * @param {string} theme - The theme to apply ('dark' or 'light')
 */
function applyTheme(theme) {
    if (theme === 'dark') {
        DOM.body.classList.add('dark-mode');
        DOM.darkModeToggle.textContent = '☀️';
        DOM.darkModeToggle.setAttribute('aria-label', 'Activate light mode');
    } else {
        DOM.body.classList.remove('dark-mode');
        DOM.darkModeToggle.textContent = '🌙';
        DOM.darkModeToggle.setAttribute('aria-label', 'Activate dark mode');
    }
}

/**
 * Initializes dark mode based on user preferences
 */
function initializeDarkMode() {
    const preferredTheme = localStorage.getItem('theme');
    let initialTheme = 'light';
    
    if (preferredTheme) {
        initialTheme = preferredTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        initialTheme = 'dark';
    }
    
    applyTheme(initialTheme);
    if (!preferredTheme && initialTheme === 'dark') {
        localStorage.setItem('theme', 'dark');
    }
}

// ===== UI Component Creation =====

/**
 * Creates a meal card element
 * @param {Object} meal - The meal data
 * @param {Object} planDetails - The plan details
 * @param {string} [mealTypeDisplayName=''] - Optional meal type display name
 * @returns {HTMLElement} The created meal card element
 */
function createMealCard(meal, planDetails, mealTypeDisplayName = '') {
    const card = document.createElement('div');
    card.className = `meal-card ${planDetails.cardClass} p-5 md:p-6`;
    
    let itemsHtml = meal.items.map(item => `<li class="text-sm">${item}</li>`).join('');
    let mealTypeTag = '';
    
    // AM/PM tags for snacks
    if (meal.type === 'am') {
        mealTypeTag = `<span class="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 mr-2">AM</span>`;
        if (DOM.body.classList.contains('dark-mode')) {
            mealTypeTag = `<span class="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-700 text-sky-100 mr-2">AM</span>`;
        }
    } else if (meal.type === 'pm') {
        mealTypeTag = `<span class="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 mr-2">PM</span>`;
        if (DOM.body.classList.contains('dark-mode')) {
            mealTypeTag = `<span class="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-700 text-indigo-100 mr-2">PM</span>`;
        }
    }
    
    card.innerHTML = `
        <div class="flex justify-between items-start mb-1.5">
            <span class="plan-tag ${planDetails.planTagClass}">${planDetails.name}</span>
            ${meal.type && (meal.type === 'am' || meal.type === 'pm') ? mealTypeTag : ''}
        </div>
        <h3 class="text-lg font-semibold mb-1.5">${meal.name}</h3>
        ${mealTypeDisplayName ? `<p class="text-xs text-gray-500 mb-1.5">${mealTypeDisplayName}</p>` : ''}
        <ul class="list-disc list-inside mb-2.5 space-y-1">${itemsHtml}</ul>
        <p class="font-semibold text-sm">Calorías: ${meal.calories}</p>
    `;
    return card;
}

// ===== Display Logic =====

/**
 * Displays meals for the selected day and meal type
 */
function displayMeals() {
    const selectedDayValue = DOM.daySelector.value;
    const selectedDayText = Array.from(DOM.daySelector.options).find(opt => opt.value === selectedDayValue).text;
    const mealTypeButton = DOM.mealTypeButtons.querySelector('button.active');
    
    DOM.mealResultDiv.innerHTML = '';
    DOM.mealResultDiv.classList.remove('hidden');
    DOM.meriendasContainer.classList.add('hidden');

    if (!mealTypeButton) {
        DOM.mealResultDiv.innerHTML = `<p class="no-results">Please select a meal time.</p>`;
        return;
    }

    const selectedMealTypeKey = mealTypeButton.dataset.meal;
    const selectedMealTypeName = mealTypeButton.textContent;

    const heading = document.createElement('h2');
    heading.className = "text-xl md:text-2xl font-bold mb-5 md:mb-6";
    heading.textContent = `${selectedMealTypeName} for ${selectedDayText}`;
    DOM.mealResultDiv.appendChild(heading);

    let mealsFound = false;
    for (const planKey in allPlansData) {
        if (planKey === "meriendasFitAdicionales") continue;
        const plan = allPlansData[planKey];
        const dayData = plan.data[selectedDayValue];
        if (dayData && dayData[selectedMealTypeKey]) {
            const meal = dayData[selectedMealTypeKey];
            const planDetails = {
                name: plan.name,
                planTagClass: plan.planTagClass,
                cardClass: plan.cardClass
            };
            DOM.mealResultDiv.appendChild(createMealCard(meal, planDetails));
            mealsFound = true;
        }
    }

    if (!mealsFound) {
        DOM.mealResultDiv.appendChild(
            Object.assign(document.createElement('p'), {
                className: "no-results",
                textContent: `No ${selectedMealTypeName.toLowerCase()} registered for this day and time.`
            })
        );
    }
}

/**
 * Displays filtered snacks based on the current filter
 */
function displayFilteredMeriendas() {
    DOM.meriendasListDiv.innerHTML = '';
    const filterType = state.activeMeriendaFilterButton ? state.activeMeriendaFilterButton.dataset.filter : 'all';
    let meriendasFound = false;

    // Display regular meal plan snacks
    ["octubre2024", "noviembre2024", "febrero2025"].forEach(planKey => {
        const plan = allPlansData[planKey];
        if (!plan || !plan.data) return;
        
        const planDetails = {
            name: plan.name,
            planTagClass: plan.planTagClass,
            cardClass: plan.cardClass
        };
        
        let meriendasDelPlan = [];
        if (plan.data.meriendasAM) meriendasDelPlan.push(...plan.data.meriendasAM);
        if (plan.data.meriendasPM) meriendasDelPlan.push(...plan.data.meriendasPM);
        if (plan.data.meriendas) meriendasDelPlan.push(...plan.data.meriendas);

        const meriendasToShow = meriendasDelPlan.filter(m => filterType === 'all' || m.type === filterType);
        
        if (meriendasToShow.length > 0) {
            meriendasFound = true;
            let planSection = DOM.meriendasListDiv.querySelector(`.merienda-section[data-plan="${planKey}"]`);
            if (!planSection) {
                planSection = document.createElement('div');
                planSection.className = 'mb-5 merienda-section';
                planSection.dataset.plan = planKey;
                planSection.innerHTML = `<h3 class="merienda-plan-title text-lg font-semibold mb-3">${plan.name}</h3>`;
                DOM.meriendasListDiv.appendChild(planSection);
            }
            meriendasToShow.forEach(merienda => {
                planSection.appendChild(createMealCard(merienda, planDetails));
            });
        }
    });

    // Display additional fit snacks
    const adicionalesPlan = allPlansData.meriendasFitAdicionales;
    if (adicionalesPlan && adicionalesPlan.items) {
        const planDetailsAdicionales = {
            name: adicionalesPlan.name,
            planTagClass: adicionalesPlan.planTagClass,
            cardClass: adicionalesPlan.cardClass
        };
        
        const meriendasAdicionalesToShow = adicionalesPlan.items.filter(m => 
            filterType === 'all' || m.type === filterType || (m.type === 'all' && (filterType === 'am' || filterType === 'pm'))
        );
        
        if (meriendasAdicionalesToShow.length > 0) {
            meriendasFound = true;
            let planSectionAdicionales = DOM.meriendasListDiv.querySelector(`.merienda-section[data-plan="meriendasFitAdicionales"]`);
            if (!planSectionAdicionales) {
                planSectionAdicionales = document.createElement('div');
                planSectionAdicionales.className = 'mb-5 merienda-section';
                planSectionAdicionales.dataset.plan = "meriendasFitAdicionales";
                planSectionAdicionales.innerHTML = `<h3 class="merienda-plan-title text-lg font-semibold mb-3">${adicionalesPlan.name}</h3>`;
                DOM.meriendasListDiv.appendChild(planSectionAdicionales);
            }
            meriendasAdicionalesToShow.forEach(merienda => {
                planSectionAdicionales.appendChild(createMealCard(merienda, planDetailsAdicionales));
            });
        }
    }

    if (!meriendasFound) {
        DOM.meriendasListDiv.innerHTML = `<p class="no-results">No snacks match the filter "${filterType.toUpperCase()}".</p>`;
    }
}

// ===== Event Handlers =====

/**
 * Initializes all event listeners
 */
function initializeEventListeners() {
    // Day selector change
    DOM.daySelector.addEventListener('change', () => {
        if (state.activeMealTypeButton) displayMeals();
    });

    // Meal type button clicks
    DOM.mealTypeButtons.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            if (state.activeMealTypeButton) {
                state.activeMealTypeButton.classList.remove('active');
            }
            event.target.classList.add('active');
            state.activeMealTypeButton = event.target;
            displayMeals();
        }
    });

    // Show meriendas button click
    DOM.showMeriendasBtn.addEventListener('click', () => {
        if (state.activeMealTypeButton) {
            state.activeMealTypeButton.classList.remove('active');
            state.activeMealTypeButton = null;
        }
        DOM.mealResultDiv.classList.add('hidden');
        DOM.meriendasContainer.classList.remove('hidden');
        const allFilterBtn = DOM.meriendaFilterControls.querySelector('button[data-filter="all"]');
        if (state.activeMeriendaFilterButton) {
            state.activeMeriendaFilterButton.classList.remove('active');
        }
        if (allFilterBtn) {
            allFilterBtn.classList.add('active');
            state.activeMeriendaFilterButton = allFilterBtn;
        }
        displayFilteredMeriendas();
    });

    // Merienda filter button clicks
    DOM.meriendaFilterControls.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            if (state.activeMeriendaFilterButton) {
                state.activeMeriendaFilterButton.classList.remove('active');
            }
            event.target.classList.add('active');
            state.activeMeriendaFilterButton = event.target;
            displayFilteredMeriendas();
        }
    });

    // Dark mode toggle
    DOM.darkModeToggle.addEventListener('click', () => {
        const newTheme = DOM.body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // System theme change detection
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newOsTheme = event.matches ? "dark" : "light";
            applyTheme(newOsTheme);
            localStorage.setItem('theme', newOsTheme);
        });
    }
}

// ===== Helper Functions =====

/**
 * Sets the default day in the day selector based on the current day of the week.
 */
function setDefaultDay() {
    const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, etc.
    const dayMapping = [
        "sunday",   // Sunday
        "monday",   // Monday
        "tuesday",  // Tuesday
        "wednesday",// Wednesday
        "thursday", // Thursday
        "friday",   // Friday
        "saturday"  // Saturday
    ];
    const currentDayValue = dayMapping[today];
    if (DOM.daySelector) {
        DOM.daySelector.value = currentDayValue;
    }
}

// ===== Initialization =====

/**
 * Initializes the application
 */
function initializeApp() {
    initializeDarkMode();
    setDefaultDay(); // Set default day first
    initializeEventListeners();
    // Automatically display meals for the default selected day and first meal type (optional)
    // Or, trigger displayMeals if a meal type is selected by default
    const initialMealTypeButton = DOM.mealTypeButtons.querySelector('button'); // Or a specific default
    if (initialMealTypeButton) {
        // initialMealTypeButton.classList.add('active'); // Uncomment if you want a meal type active by default
        // state.activeMealTypeButton = initialMealTypeButton; // Uncomment if you want a meal type active by default
    }
    displayMeals(); // Display meals for the initially selected day and potentially meal type
    // Ensure meriendas are hidden initially, unless a specific state dictates otherwise
    DOM.meriendasContainer.classList.add('hidden'); 
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp); 