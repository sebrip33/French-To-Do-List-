window.onload = function() {
    const form = document.querySelector("#add-todo");
    const input = document.querySelector("#new-todo");
    const todoList = document.querySelector("#todo-list");
    const filterButtons = document.querySelector("#filter-buttons");

// Handle form submission
    form.addEventListener("submit", Event => {
        Event.preventDefault();

    // Get the value of the input field
        const newTodoValue = input.value;

    // Clear the input field
        input.value = "";

    // Create a new list item
        const newTodo = document.createElement("li");
        newTodo.innerHTML = `
            <input type="checkbox">
            <span>${newTodoValue}</span>
            <button>x</button>
        `;

    // Add the new todo to the list
        todoList.appendChild(newTodo);

        const deleteButton = newTodo.querySelector("button");
        deleteButton.addEventListener("click", () => {
            newTodo.classList.add("hide");
        });
    });

// Handle filter button clicks
    filterButtons.addEventListener("click", Event => {
    // Get the data-filter attribute of the clicked button
        const clickedButton = Event.target;
        const filter = clickedButton.getAttribute("data-filter");

    // Remove the "active" class from all buttons
    Array.from(filterButtons.children).forEach(button => {
    button.classList.remove("active");
    });

    // Add the "active" class to the clicked button
    clickedButton.classList.add("active");

    // Show only the todos that match the selected filter
    Array.from(todoList.children).forEach(todo => {
        if (filter === "All") {
            todo.classList.remove("hide");
            todo.style.display = "block";
        } else if (filter === "completed" && todo.classList.contains("completed")) {
            todo.classList.remove("hide");
            todo.style.display = "block";
        } else if (filter === "active" && !todo.classList.contains("completed")) {
            todo.classList.remove("hide");
            todo.style.display = "block";
        } else {
            todo.classList.remove("hide");
            todo.style.display = "none";
        }
    });
}); 
}