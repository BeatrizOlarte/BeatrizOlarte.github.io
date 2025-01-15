function toggleMode() {
    const body = document.body;
    const button = document.querySelector('.toggle-button');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Switch to Light Mode';
    } else {
        button.textContent = 'Switch to Dark Mode';
    }
}


function getQuote() {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
            document.getElementById("insertQuoteHere").textContent = data.quote;
        });
}



function searchWord() {
    const searchTermElem = document.getElementById('searchTerm')
    if (searchTermElem) {
        const searchTerm = searchTermElem.value.toLowerCase();
        const bodyText = document.body.innerText.toLowerCase();
        if (searchTerm === '') {
            alert('Please enter a search term.');
            return;
        }
        if (bodyText.includes(searchTerm)) {
            alert(`The term "${searchTerm}" was found in the document.`);
        } else {
            alert(`The term "${searchTerm}" was not found in the document.`);
        }
    }

  }


    document.getElementById('searchButton').addEventListener('click', searchWord);





const storedSearchTerm = localStorage.getItem("SearchTerm");
let SearchTerm;
if (storedSearchTerm) {
    SearchTerm = JSON.parse(storedSearchTerm);
} else {
    SearchTerm = [];
}

// Save SearchTerm to local storage
function saveSearchTerm() {
    localStorage.setItem("SearchTerm", JSON.stringify(SearchTerm));
}

// Render SearchTerm
function renderSearchTerm() {
    const SearchTermList = document.getElementById("SearchTerm");
    SearchTermList.innerHTML = "";

    function handleChange(index) {
        return function () {
            toggleTodoCompleted(index);
        };
    }

    function handleRemove(index) {
        return function () {
            removeTodo(index);
        };
    }

    for (let index = 0; index < SearchTerm.length; index++) {
        const todo = SearchTerm[index];

        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", handleChange(index));

        const text = document.createTextNode(todo.text);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", handleRemove(index));

        listItem.appendChild(checkbox);
        listItem.appendChild(text);
        listItem.appendChild(removeBtn);

        SearchTermList.appendChild(listItem);
    }
}

// Add a new todo
function addSearchTerm() {
    const input = document.getElementById("searchTerm");
    const text = input.value.trim();

    if (text !== "") {
        SearchTerm.push({ text, completed: false });
        input.value = "";
        saveSearchTerm();
        renderSearchTerm();
    }
}

// Toggle todo completed state
function toggleTodoCompleted(index) {
    SearchTerm[index].completed = !SearchTerm[index].completed;
    saveSearchTerm();
    renderSearchTerm();
}

// Remove todo
function removeTodo(index) {
    SearchTerm.splice(index, 1);
    saveSearchTerm();
    renderSearchTerm();
}

// Save SearchTerm to local storage
function saveSearchTerm() {
    localStorage.setItem("SearchTerm", JSON.stringify(SearchTerm));
}

// Event listener for the input field
function handleKeyDown(event) {
    if (event.key === "Enter") {
        addSearchTerm();
    }
}

// Event listener for the title field
function handleKeyDownTitle(event) {
    if (event.key === "Enter") {
        localStorage.setItem(
            "searchTerm",
            document.getElementById("searchTerm").innerText
        );
    }
}


document.getElementById("searchTerm").addEventListener("keydown", handleKeyDown);

// Initial render
renderSearchTerm();

document
    .getElementById("searchTerm")
    .addEventListener("keydown", handleKeyDown);

    if (searchTerm !== '') {
        if (bodyText.includes(searchTerm)) {
            renderSearchTerm();
        }
    }



function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    window.location.href = `mailto:olarte.beatriz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
}
