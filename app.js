"use strict";

window.addEventListener("load", initApp);

const list = document.querySelector("#to-do-list");
const newToDO = document.querySelector("#input-new-to-do");

function initApp () {
console.log("loader");
document.querySelector("#btn-add-item").addEventListener("click",addToDo);
}


function addToDo() {

const html = /*html*/ `
    <li>
        <span>${newToDO.value}</span>
        <button>Delete</button>
    </li>
    `;

    list.insertAdjacentHTML("beforeend", html);
    list.querySelector("li:last-child button").addEventListener("click", removeToDo);

    newToDO.value = "";
    newToDO.focus();

    // anden metode
//     console.log("YO")

//     const listItem = document.createElement("li");
//     const listText = document.createElement("span");
//     const listBtn = document.createElement("button");

// listText.textContent = newToDO.value;
// listBtn.textContent ="Delete";

// listItem.appendChild(listText);
// listItem.appendChild(listBtn);

// // append list to nll
// list.appendChild(listItem)

// // add click event to button
// listBtn.addEventListener("click", removeToDo);

// reset input and focus

}

function removeToDo () {
    console.log("remove");
    this.parentNode.remove();
    
}

