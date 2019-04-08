const btnAddRecipe = document.querySelector("#btnAddRecipe");
const recipesListForm = document.querySelector("#recipesListForm");
const recipesList = document.querySelector("#recipesList");
const allRecipes = document.querySelector("#allRecipes");
let steps;
let userId;

recipesList.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target);

    if (target.id === "btnAddRecipe") {
        recipesListForm.style.display === 'flex' ?
            recipesListForm.style.display = 'none' :
            recipesListForm.style.display = 'flex';
    }

    if (target.id === "recipeCreate") {
        steps = 1;
        addNewReciepe();
    }

    if (target.id === "btnAddStep") {
        // addStepToDB();
        renderNewAddStep(steps);
        steps++;
    }

    if (target.hasAttribute('data-title')) {
        let _id = target.getAttribute('data-title');
        let recipesListSection = document.getElementById(`recipe${_id}`);
        recipesListSection.style.display === 'block' ?
            recipesListSection.style.display = 'none' :
            recipesListSection.style.display = 'block';
    }
});

function getRecipesByUserID(userId) {
    let url = `/api/recipe/user_id/${userId}`;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            renderRecipes(this.responseText);
        }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "50843dc6-333a-4189-abaf-2eaf0bbfdac0");
    xhr.send();
}

function getSpepsByRecipeId(recipeId) {
    let url = `/api/step/recipeid/${recipeId}`;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            renderSteps(this.responseText);
        }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "88a80078-c2e0-45a8-a2d0-3b0140fc354d");

    xhr.send();
}

function addNewReciepe() {
    const data = JSON.stringify({
        "title": document.querySelector('#recipeTitle').value,
        "description": document.querySelector('#recipeDescribe').value,
        "ingredients": document.querySelector('#recipeIngredients').value,
        "photo_id": "",
        "user_id": userId
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            startSteps(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:3000/api/recipe/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "0f3e39ac-90c0-4c55-b028-9c726213088a");

    xhr.send(data);
}


function renderRecipes(data) {
    let dataArr = JSON.parse(data);

    if (dataArr.length === 0) {
        return;
    }

    dataArr.forEach(element => {
        console.log(element);
        let htmlForm = `<div class="recipesList__title" data-title ='${element.id}'>
    ${element.title}
    <div class="recipesList__Section" id="recipe${element.id}">
            <h4>Description:</h4>
            ${element.description} 
            <h4>Ingredients:</h4>
            ${element.ingredients} 
        </div>
        </div>`;
        allRecipes.innerHTML += htmlForm;
        getSpepsByRecipeId(element.id);
    });
}

function renderSteps(data) {
    let dataArr = JSON.parse(data);
    let count = 1;
    let htmlForm = "";

    if (dataArr.length == 0) {
        return;
    }

    dataArr.forEach(element => {
        console.log(element);
        htmlForm = `<h4>Step ${count}:</h4>
    <h5>${element.title}</h5>
    ${element.description}`;
        document.querySelector(`#recipe${element.recipe_id}`).innerHTML += htmlForm;
        count++;
    });
}

function startSteps(data) {
    document.querySelector("#formAddSteps").style.display = "flex";
}

function renderNewAddStep(num) {
    let newStepHTML = `<h4>Step ${num}:</h4>
    <textarea id="recipeStep${num}" class="recipesList__Textarea"></textarea>`
    let newDiv = document.createElement("div");
    newDiv.classList.add('recipesList_row');
    newDiv.innerHTML = newStepHTML;
    document.querySelector('#formAddSteps').appendChild(newDiv);
}

function ready() {
    userId = sessionStorage.getItem('idUser');
    getRecipesByUserID(userId);
}

document.addEventListener("DOMContentLoaded", ready);
