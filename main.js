const END_POINT = "http://localhost:3000/api";
const SERVER_LINK = "http://localhost:3000";

const input_submit = document.querySelector(".input__submit");
const input_value = document.querySelector(".user-input");
const link = document.querySelector("#link");

// input_submit.addEventListener("click", (e) => {
//   const value = input_value.value;
//   fetch(END_POINT + "/link/generate", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       link: value,
//     }),
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       link.setAttribute("href", SERVER_LINK + "/" + result.data.shortedLink);
//       link.textContent = SERVER_LINK + "/" + result.data.shortedLink;
//       console.log(SERVER_LINK + "/" + result.data.shortedLink);

//       modal.style.display = "block";
//     });
// });

var modal = document.getElementById("myModal");
modal.style.display = "block";

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
