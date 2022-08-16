import fetchProducts from "./js/fetchProducts.js"
import { setUpStore, store } from "./js/store.js"
import displayProducts from "./js/displayProducts.js"
import "./js/Cart/toggleCart.js";
import "./js/Cart/toggleSideBar.js";
import "./js/Cart/SetUpCart.js";


const init = async () => {
   const fetchedData = await fetchProducts();
   if (fetchedData) {
      setUpStore(fetchedData);
      const featuredProducts = store.filter((product) => {
         return product.featured === true;
      })
    displayProducts(featuredProducts,document.querySelector("#products-container"))
      console.log(featuredProducts)
   }
   else {
      alert("no products found")
   }
  


}

window.addEventListener("DOMContentLoaded", init)