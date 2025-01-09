function showCart() {
alert("show item");
}
const button = document.getElementById("searchButton");
button.addEventListener("click", searchButton);

const showCart = document.getElementById("cartIcon");
const shoppingCart = document.getElementById(shoppingCart);

showCart.addEventListener("click", () =>{
    if (shoppingCart.style.display === "none" || shoppingCart.style.display ==="") {
        shoppingCart.style.display === "block"; } 
     else {
        shoppingCart.style.display = "none"
     }
});