let cartContent = document.querySelector("#cartContent");

function renderCart() {
  cartContent.innerHTML = "";

  if (cartItems.length > 0) {
    cartItems.forEach((item, index) => {
      cartContent.innerHTML += `
        <h2>Product Name: ${item.name}</h2>
        <p>Price: ${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Color: ${item.color}</p>
        <p>Size: ${item.size}</p>
        <img src="${item.Image}" alt="Product Image">
        <button class="delete-btn" data-index="${index}">Delete</button>
        `
    })
    //delete button
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", function () {
        let index = parseInt(this.getAttribute("data-index"));
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        //update cart after deleting an item
        renderCart();
      })
    })
  }
  else {
    cartContent.innerHTML = `<p id="cart-para">Cart is empty</p>`;
  }
}
//retriving updated data 
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
renderCart();

let menuBtn = document.querySelector(".icons #menu");
let linksContainer = document.querySelector(".links");
let bellIcon = document.querySelector("#bell-icon");
let signupbtn = document.querySelector(".signup-form button");
let message = document.querySelector(".message");
let emailInput = document.querySelector("#email");
menuBtn.addEventListener("click", () => {

  //getComputedStyle is to check the current visibility state on the first click.
  let currentVisibility = getComputedStyle(linksContainer).visibility;

  if (currentVisibility === "hidden") {
    linksContainer.style.visibility = "visible";
  }
  else {
    linksContainer.style.visibility = "hidden";
  }
});

bellIcon.addEventListener("click", () => {
  console.log("bell");
  confirm("You have no notification for now");
});
signupbtn.addEventListener("click", function () {
  message.style.display = "block";
  let emailPattren = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattren.test(emailInput.value)) {
    message.textContent = "Wrong Email";
    message.style.color = "red";
    setTimeout(function () {
      message.style.display = "none";
    }, 2000)
  }
  else {
    message.textContent = "subscribed sucessfully";
    message.style.color = "green";
    setTimeout(function () {
      message.style.display = "none";
    }, 2000)
  }
})

