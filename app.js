// Get elements
const recipeNameInput = document.getElementById("recipe-name");
const recipeIngredientsInput = document.getElementById("recipe-ingredients");
const recipeInstructionsInput = document.getElementById("recipe-instructions");
const recipeTimeInput = document.getElementById("recipe-time");
const recipeDifficultyInput = document.getElementById("recipe-difficulty");
const addRecipeBtn = document.getElementById("add-recipe-btn");
const recipeList = document.getElementById("recipe-list");

// Initialize recipes array
let recipes = [];

// Function to add a recipe
function addRecipe() {
    const recipeName = recipeNameInput.value.trim();
    const recipeIngredients = recipeIngredientsInput.value.trim().split(",").map(ingredient => ingredient.trim());
    const recipeInstructions = recipeInstructionsInput.value.trim();
    const recipeTime = recipeTimeInput.value.trim();
    const recipeDifficulty = recipeDifficultyInput.value;

    if (recipeName && recipeIngredients.length > 0 && recipeInstructions && recipeTime) {
        const recipe = {
            name: recipeName,
            ingredients: recipeIngredients,
            instructions: recipeInstructions,
            time: recipeTime,
            difficulty: recipeDifficulty,
        };
        recipes.push(recipe);
        displayRecipes(recipes);
        clearInputs();
    } else {
        alert("Please fill in all fields!");
    }
}

// Function to clear input fields
function clearInputs() {
    recipeNameInput.value = "";
    recipeIngredientsInput.value = "";
    recipeInstructionsInput.value = "";
    recipeTimeInput.value = "";
    recipeDifficultyInput.value = "easy";
}

// Function to display recipes
function displayRecipes(recipes) {
    recipeList.innerHTML = "";
    recipes.forEach(recipe => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="recipe-title">${recipe.name}</div>
            <div class="recipe-info">
                <strong>Preparation Time:</strong> ${recipe.time} | <strong>Difficulty:</strong> ${recipe.difficulty}
            </div>
            <div class="recipe-ingredients">
                <strong>Ingredients:</strong>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <div class="recipe-instructions">
                <strong>Instructions:</strong>
                <p>${recipe.instructions}</p>
            </div>
        `;
        recipeList.appendChild(li);
    });
}

// Event listener to add recipe
addRecipeBtn.addEventListener("click", addRecipe);

// Initial display
displayRecipes(recipes);
