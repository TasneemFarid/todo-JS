// let taskinput1 = document.querySelector(".taskinput1");
// let taskinput2 = document.querySelector(".taskinput2");
// let taskbutton = document.querySelector(".taskbutton");
// let list = document.querySelector(".list");

// let arr = [];

// taskbutton.addEventListener("click", function () {
//   list.innerHTML = "";
//   arr.push({ name: taskinput1.value, description: taskinput2.value });
//   display();
// });

// function display() {
//   arr.map((item) => {
//     list.innerHTML += `<li>${item.name} ${item.description}</li> <button class="delete">delete</button>`;
//   });

//   let remove = document.querySelectorAll(".delete");
//   let deleteArr = Array.from(remove);

//   deleteArr.map((button, index) => {
//     button.addEventListener("click", function () {
//       list.innerHTML = "";
//       arr.splice(index, 1);
//       display();
//     });
//   });
// }

let task = document.querySelector(".taskinput1");
let description = document.querySelector(".taskinput2");
let button = document.querySelector(".taskbutton");
let list = document.querySelector(".list");
let taskarr = [];
button.addEventListener("click", function () {
  taskarr.push({
    task: task.value,
    description: description.value,
  });
  addTodo();
});

function addTodo() {
  list.innerHTML = "";
  taskarr.map((item) => {
    list.innerHTML += `<li>${item.task} - ${item.description}</li> <button class="delete">Delete</button>`;

    let remove = document.querySelectorAll(".delete");
    let removeArr = Array.from(remove);
    removeArr.map((item, index) => {
      item.addEventListener("click", function () {
        taskarr.splice(index, 1);
        addTodo();
      });
    });
  });
}
