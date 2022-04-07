let dark = document.querySelector(".dark");
let body = document.querySelector("body");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let form = document.querySelector("#form");
let tbody = document.querySelector("#tbody");
let listedItems = document.querySelector("listedItems");
      let totalPrice = document.querySelector(".totalPrice");
// dark.addEventListener("click", darkFunc);
form.addEventListener("submit", submitFunc);

// function darkFunc() {
//   let bg = [ "#050541", "darkslategrey", "#050541"];
//   let i = 0;

//     i = i < bg.length ? ++i : 0;
//     bg.map(items => {
//         body.style.background = items;
//         console.log(items);
//     })
    
    
// }

function submitFunc(e) {
  e.preventDefault();
  if (input1.value == "" || input2.value == "" || input3.value == "") {
    alert("Enter the field");
  } else {
    let row = document.createElement("tr");
    let newName = document.createElement("td");
    newName.innerHTML = input1.value;
    row.appendChild(newName);

    let newWeight = document.createElement("td");
    newWeight.innerHTML = input2.value;
    row.appendChild(newWeight);

    let newPrice = document.createElement("td");
    newPrice.innerHTML = input3.value;
    row.appendChild(newPrice);

    let newbtn = document.createElement("td");
    let button = document.createElement("button");
    button.innerHTML = "Delete";
    button.className = "btn";
    newbtn.appendChild(button);
    row.appendChild(newbtn);

 let values = input2.value * input3.value;
 totalPrice.innerHTML ="Total Price: ".concat(values).concat(" BDT");

    input1.value = "";
    input2.value = "";
    input3.value = "";

    newbtn.addEventListener("click", function (e) {
      let target = e.target.parentElement.parentElement;
      target.remove();
      totalPrice.innerHTML = "Total Price: ".concat(0).concat(" BDT");
    });

     

    tbody.appendChild(row);
  }
  storebook();
}

function storebook() {
  let books;
  // let getItems = ;

  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
}

function storage(e) {
  let books = storebook();
  books.push(e);

  localStorage.setItem("books", JSON.stringify(books));
}




