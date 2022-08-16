const cart = document.querySelector(".cart")
const cart_overlay = document.querySelector(".cart-overlay")
const cart_close = document.querySelector(".cart-close")


cart.addEventListener("click", () => {
    cart_overlay.classList.add("show")
 })
 
 cart_close.addEventListener("click", () => {
    cart_overlay.classList.remove("show")
 })

 export const openCartItemsList=()=>{
    cart_overlay.classList.add("show");
 }