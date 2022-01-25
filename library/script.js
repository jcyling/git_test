let myLibrary = [];

// Static Selectors
const gallery = document.querySelector(".gallery");
const addBtn = document.querySelector(".add");
const submit = document.querySelector(".submit");
const formData = document.getElementById("filmForm");
addBtn.addEventListener("click", displayForm);
submit.addEventListener("click", submitFilm(formData));

gallery.onclick = function(event) {
    let target = event.target.closest('button');
    if (!target) {
        return;
    }
    let btnClass = target.classList;
    if (btnClass.contains("remove")) {
        removeFilm(target);
    }
    else if (btnClass.contains("watchState")) {
        changeStatus(target);
    }
    saveStorage();
}

// Film constructor and prototype
function Film (title, director, genre, watched) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.watched = watched;
}

Film.prototype.info = function() {
    if (this.watched) {
        watched = "watched"
    }
    else {
        watched = "not watched yet"
    }
    return `${this.title} by ${this.director}, ${this.genre} pages, ${this.watched}.`
}

function submitFilm(formData) {
    const titleField = formData.elements["title"];
    const directorField = formData.elements["director"];
    const title = titleField.value;
    const director = directorField.value;
    let genre;

    const genreSelects = document.querySelectorAll(`select[name="genre"]`);
    for (const genreSelect of genreSelects) {
        if(genreSelect.checked) {
            genre = genreSelect.value;
            console.log("genre");
            break;
        }
    }

    // const watched = prompt("Watched");

    if (!title || !director || !genre || !watched) {
        return window.alert("Check again!");
    }
    else {
        const newFilm = new Film(title, director, genre, watched);
        myLibrary.push(newFilm);
        let i = myLibrary.length;
        let newCard = createFilm(newFilm, i);
        gallery.appendChild(newCard);
        saveStorage();
    }
}

function displayFilms() {
    for (let i = 0; i < myLibrary.length; i++) {
        let newCard = createFilm(myLibrary[i], i);
        gallery.appendChild(newCard);
    }
}

function createFilm(film, i) {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const director = document.createElement("h4");
    const genre = document.createElement("h4");

    const userControls = document.createElement("div");
    const rmvBtn = document.createElement("button");
    const watchBtn = document.createElement("button");

    title.textContent = film.title;
    director.textContent = film.director;
    genre.textContent = film.genre;
    watchBtn.textContent = watchedOrNot(film.watched);
    rmvBtn.textContent = "Remove";

    userControls.classList.add("userControls");
    watchBtn.classList.add("watchState");
    watchBtn.setAttribute("value", i);

    rmvBtn.classList.add("remove");
    rmvBtn.setAttribute("value", i);

    card.classList.add("film");
    card.setAttribute("id", i);
    userControls.append(rmvBtn, watchBtn);
    card.append(title, director, genre, userControls);

    return card;
}

function changeStatus(button) {
    let index = button.value;
    let status = myLibrary[index].watched;

    if (status) {
        status = false;
    }
    else {
        status = true;
    }

    myLibrary[index].watched = status;
    button.textContent = watchedOrNot(status);
}

function watchedOrNot(value) {
    return (value) ? "Watched" : "Not watched";
}

function removeFilm(button) {
    let index = button.value;
    myLibrary.splice(index, 1);
    let parentCard = document.getElementById(index);
    console.log(parentCard);
    gallery.removeChild(parentCard);
}

// Form functions
function displayForm() {
    const visibilityForm = document.querySelector(".formContainer");
    visibilityForm.style.visibility = "visible";
}

// Existing entries
const theHobbit = new Film ("The Hobbit", "Peter Jackson", "Fantasy", true);
const StandByMe2 = new Film ("Stand By Me 2", "Takashi Yamazaki", "Fantasy", false);

// Initial display
myLibrary = loadStorage();
displayFilms();

// Local storage
function loadStorage() {
    const library = JSON.parse(localStorage.getItem("myLibrary"));
    if (library) {
        console.log('Been here before');
        return library;
    }
    else {
        console.log('Hi new person!');
        myLibrary.push(theHobbit);
        myLibrary.push(StandByMe2);
    }
}

function saveStorage() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}
