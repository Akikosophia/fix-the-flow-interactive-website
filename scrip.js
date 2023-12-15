
// function myfun(){
//     document.getElementById
//      ('form-wrapper').classList.add
//       ('active');
//    }
  
//   function closer(){
//      document.getElementById('form-wrapper')
//     .classList.remove('active');
//   }


// const button = document.getElementById("#close");

// button.addEventListener("click", (e) => {
//   button.classList.toggle("container");
// });

// const btn = document.getElementById("#chat-now");

// btn.addEventListener("click", (e) => {
//     btn.classList.toggle("#form-wrapper");
//   });

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");


showButton.addEventListener("click", () => {
  dialog.showModal();
});


closeButton.addEventListener("click", () => {
  dialog.close();
});
