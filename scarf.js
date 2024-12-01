let addToCartBtn=document.querySelector("#addto-cart");
addToCartBtn.addEventListener("click" ,function(){
  console.log("added to cart");
  let productName = document.querySelector(".scarf-dets h2").textContent;
  let price = document.querySelector(".scarf-dets .price").textContent;
  let color = document.querySelector(".color-div input[name='color']:checked").value;
  let quantity=parseInt(document.querySelector(".quantity-div #quantity").value);
  let size = document.querySelector(".size-div #size").value;
  let img=document.querySelector(".image-container img").src;
  let productDets={
   name:productName,
   price:price,
   color:color,
   quantity:quantity,
   size:size,
   Image:img
  }
  //retriving items or may be the cart is empty initially 
  let cartItems=JSON.parse(localStorage.getItem("cartItems"))||[];
  console.log(cartItems);
  //if dets matched it will return index of item if not it will return -1
  let existingItemIndex = cartItems.findIndex(item =>
    item.name === productDets.name &&
    item.price === productDets.price &&
    item.size === productDets.size &&
    item.Image === productDets.Image
  );
  
if(existingItemIndex > -1){
cartItems[existingItemIndex].quantity+=quantity;
}
else{
  cartItems.push(productDets);
}
//saving data on browser
 localStorage.setItem("cartItems",JSON.stringify(cartItems));
 renderCart();
})