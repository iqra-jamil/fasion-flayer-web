let menuBtn = document.querySelector(".icons #menu");
let linksContainer = document.querySelector(".links");
let bellIcon = document.querySelector("#bell-icon");
let signupbtn = document.querySelector(".signup-form button");
let message = document.querySelector(".message");
let emailInput = document.querySelector("#email");
let searchBox = document.querySelector(".search-box");
let searchInput = document.querySelector(".search-box input");
let magnGlass = document.querySelector(".search-box i");
let paragraphs = document.querySelectorAll('#hats-section p,#tshirts-section p,#scarves-section p,#handbags-section p');
let msgDiv = document.querySelector("#div");
let matchedMsg = document.createElement("p");
let buyBtn=document.querySelectorAll("#buy-btn");

matchedMsg.style.display = "none"
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

//...................SEARCH BOX......................//

//Extracting input value
let inputVal;
let paraTxt;
searchBox.addEventListener("input", function (dets) {
  console.log(dets.target.value);
  inputVal = dets.target.value.toLowerCase();
  if (inputVal === "") {
    paragraphs.forEach((para) => {
      matchedMsg.style.display = "none";
      para.style.backgroundColor = "transparent";
      para.style.color = "#fff";
    });
  }
})

magnGlass.addEventListener("click", function () {
  searchProduct();
})
//extract texts of paragraphs
function searchProduct() {
  let matched = false;
  paragraphs.forEach((para) => {
    paraTxt = para.textContent.toLowerCase();

    if (inputVal === paraTxt) {
      matchedMsg.innerText = "See the results below";
      matchedMsg.style.fontSize = "1.5vw";
      matchedMsg.style.display = "block";
      matchedMsg.style.color = "green";
      para.style.backgroundColor = "yellow";
      para.style.color = "black";
      matched = true;
    }

  })

  document.querySelector(".mainsection").appendChild(matchedMsg);

  if (!matched) {
    matchedMsg.innerText = "no matching result found";
    if (matchedMsg.style.display === "none") {
      matchedMsg.style.display = "block";
    }

    matchedMsg.style.color = "Red";
    matchedMsg.style.fontSize = "1.5vw";
    setTimeout(() => {
      matchedMsg.style.display = "none";
    }, 2000)
  }
}
buyBtn.forEach((buyNow)=>{
  buyNow.addEventListener("click",function(){
swal.fire({
  title:'Order placed successfully!',
   text:'Your order ID is #12345.',
   icon:"success",
   confirmButtonText:"OK"
 })
})
})