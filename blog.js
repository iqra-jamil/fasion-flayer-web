let menuBtn=document.querySelector(".icons #menu");
let linksContainer=document.querySelector(".links");
let bellIcon=document.querySelector("#bell-icon");
let signupbtn=document.querySelector(".signup-form button");
let message=document.querySelector(".message");
let emailInput=document.querySelector("#email");
let readBtn=document.querySelectorAll(".read-btn");
let moreTxt=document.querySelectorAll(".blog-para");
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

bellIcon.addEventListener("click" ,()=>{
 
confirm("You have no notification for now");
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


// readBtn.forEach((btn,index)=>{
//   btn.addEventListener("click",()=>{
  
// if((moreTxt[index].style.display === "inline")){
//   moreTxt[index].style.display="none";
//   btn.textContent="Read more";
//   console.log("none");
// }
// else{
//   moreTxt[index].style.display="inline";
//   btn.textContent="Read less";
// }

//   })
//  }) 

readBtn.forEach((btn,idx)=>{
  console.log(idx);
  btn.addEventListener("click",()=>{
if(moreTxt[idx].style.display==="inline"){
  moreTxt[idx].style.display="none";
  btn.textContent="Read more";
}
else{
  moreTxt[idx].style.display="inline";
  btn.textContent="Read less";
}
    
  })
})