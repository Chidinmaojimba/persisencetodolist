// let items = [];
// const input = document.getElementById("itemInput")

// const itemsDiv = document.getElementById("items")

// const storageKey = "items";

// function renderItems(){
// itemsDiv.innerHTML = null;
// for(const [idx, items] of Object.entries(item)){
//     const container = document.createElement("div")
//     container.style.marginBottom = "10px"
//     const text = document.createElement("P")
//     text.style.display = "inline"
//     text.style.marginRight = "10px"
//     text.textContent = items;
//     const button = document.createElement("button")
//     button.textContent = "Delete"
//     button.onclick = () =>removeItems(idx)
//     container.appendChild(text)
//     container.appendChild(button)
//     itemsDiv.appendChild(container)
// }
// }
// renderItems()

// function loadItems(){
// const oldItems = localStorage.getItem(storageKey)
// if(oldItems) items = JSON.parse(oldItems)
//     renderItems
// }

// function saveItems(){
//  const stringItems = JSON.stringify(items);
//  localStorage.setItem(storageKey, stringItems)
// }
//  function addItems(){
//     const value = input.value;
//     if(!value){
//         alert("you cannot add an empty item")
//         return
//     }
// items.push(value)
// removeItems()
// input.value =""
// saveItems
//  }
//  function removeItems(idx){
// items.splice(idx, 1)
// renderItems()
// saveItems
//  }

//  document.addEventListener("DOMContentLoaded", loadItems)














 let items = [];
const input = document.getElementById("itemInput");
const itemsDiv = document.getElementById("items");
const storageKey = "items";

function renderItems() {
  itemsDiv.innerHTML = null;
  for (const [idx, item] of items.entries()) {
    const container = document.createElement("div");
    container.style.marginTop = "10px";
   // container.style.marginRight = "390px"
    
    const text = document.createElement("P");
    text.style.display = "inline";
    text.style.marginRight = "10px";
    text.textContent = item;
    
    
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => removeItems(idx);
    
    container.appendChild(text);
    container.appendChild(button);
    itemsDiv.appendChild(container);
  }
}

function loadItems() {
 // const oldItems = localStorage.getItem(storageKey);
 // if (oldItems) {
  //  items = JSON.parse(oldItems);
//  }
  renderItems(); // Corrected this line to call renderItems() with parentheses
}

function saveItems() {
  const stringItems = JSON.stringify(items);
  //localStorage.setItem(storageKey, stringItems);
}

function addItems() {
  const value = input.value;
  if (!value) {
    alert("You cannot add an empty item");
    return;
  }
  
  items.push(value);
  renderItems(); // Update the display immediately after adding an item
  input.value = "";
  saveItems(); // Corrected this to call saveItems() with parentheses
}

function removeItems(idx) {
  items.splice(idx, 1);
  renderItems(); // Update the display immediately after removing an item
  saveItems(); // Corrected this to call saveItems() with parentheses
}

document.addEventListener("DOMContentLoaded", loadItems);
