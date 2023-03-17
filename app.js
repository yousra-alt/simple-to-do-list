"use strict";

window.addEventListener("load", initApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() {
    document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = newToDo.value;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    list.appendChild(listItem);

    listBtn.addEventListener("click", removeToDo);

    // reset input and focus
    newToDo.value = "";
    newToDo.focus();
}

function removeToDo() {
    list.removeChild(this.parentNode);
}
