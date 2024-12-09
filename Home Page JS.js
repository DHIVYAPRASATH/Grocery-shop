// Example list of grocery items
const groceryItems = [
    "Apples",
    "Bananas",
    "Carrots",
    "Broccoli",
    "Bread",
    "Milk",
    "Eggs",
    "Cheese",
    "Tomatoes",
    "Potatoes",
    "Orange Juice",
    "Butter",
    "Yogurt",
    "Chicken",
    "Rice",
    "Pasta",
];

function showSuggestions(event) {
    const input = event.target.value.toLowerCase();
    const suggestionsBox = document.getElementById("suggestions");

    suggestionsBox.style.display = "block";

    // Clear previous suggestions
    suggestionsBox.innerHTML = "";

    if (input.length > 0) {
        // Filter items that match the input
        const suggestions = groceryItems.filter(item => 
            item.toLowerCase().startsWith(input)
        );

        if(suggestions.length===0)
        {
            const li = document.createElement("li");
            li.textContent = "No matching items found ...";
            suggestionsBox.appendChild(li);
        }
        else
        {
        suggestions.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;

            // Set input value when a suggestion is clicked
            li.addEventListener("click", () => {
                document.getElementById("search-input").value = item;
                suggestionsBox.innerHTML = ""; // Clear suggestions
                suggestionsBox.style.display = "none";
            });

            suggestionsBox.appendChild(li);
        });
        }
    }
    else{
        suggestionsBox.style.display = "none";
    }
}
