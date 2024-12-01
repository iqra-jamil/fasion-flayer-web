// The logic works by using localStorage to store the user's cart data persistently across page reloads or navigation between pages. When the page loads, the cart items are retrieved from localStorage using JSON.parse(localStorage.getItem("cartItems")) || [], ensuring that if no cart data exists, it initializes as an empty array. The cart data is displayed on the page by dynamically generating HTML based on the cartItems array. If a user adds a new item to the cart, the cart is updated, and the new data is saved back to localStorage using localStorage.setItem("cartItems", JSON.stringify(cartItems)). This allows the cart to retain its contents even if the page is refreshed or the user navigates to another page. To handle deletions, the cart items are removed from the array, and the updated cart is saved back to localStorage. This ensures the cart’s state is consistent and persistent across different files and page loads.

let addToCartBtn=document.querySelector("#addto-cart");
addToCartBtn.addEventListener("click" ,function(){
  console.log("added to cart");
  let productName = document.querySelector(".handbag-dets h2").textContent;
  let price = document.querySelector(".handbag-dets .price").textContent;
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