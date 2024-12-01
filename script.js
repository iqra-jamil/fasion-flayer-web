console.log("website");
let menuBtn=document.querySelector(".icons #menu");
let linksContainer=document.querySelector(".links");
let rightArrow=document.querySelector("#right");
let leftArrow=document.querySelector("#left");
let sliderContainer=document.querySelector(".featuredContainer .images");
let bellIcon=document.querySelector("#bell-icon");
let searchBox=document.querySelector(".search-box");
let searchInput=document.querySelector(".search-box input");
let searchIcon=document.querySelector(".search-box i");
let signupbtn=document.querySelector(".signup-form button");
let message=document.querySelector(".message");
let emailInput=document.querySelector("#email");
//menu button
menuBtn.addEventListener("click",()=>{

    //getComputedStyle is to check the current visibility state on the first click.
  let currentVisibility=getComputedStyle(linksContainer).visibility;
  
   if(currentVisibility==="hidden"){
    linksContainer.style.visibility="visible";
   }
   else{
    linksContainer.style.visibility="hidden";
   }
});
//feature container
leftArrow.addEventListener("click" ,()=>{
  console.log("leftarrow");
  sliderContainer.style.scrollBehavior = "smooth";//css property
  sliderContainer.scrollLeft -=100;//Scroll left by 100 pixels
});

rightArrow.addEventListener("click",()=>{
    console.log("rightarrow");
    sliderContainer.style.scrollBehavior="smooth";//other value we can set auto which means it will move instantly
    sliderContainer.scrollLeft+=100;
  });
bellIcon.addEventListener("click" ,()=>{
  console.log("bell");
  alert("You have no notification for now");
});

signupbtn.addEventListener("click",function(){
  message.style.display = "block";
let emailPattren=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattren.test(emailInput.value)){
     message.textContent="Wrong Email";
     message.style.color="red";
     setTimeout(function(){
      message.style.display="none";
     },2000)
}
else{
 message.textContent="subscribed sucessfully";
 message.style.color="green";
 setTimeout(function(){
  message.style.display="none";
 },2000)
}
})


