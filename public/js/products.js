import "../js/Cart/toggleCart.js";
import "../js/Cart/toggleSideBar.js";
import { setUpCompanies } from "./Filter/companies.js";
import setUpPrice from "./Filter/price.js";
import displayProducts from "./displayProducts.js";
import{store,setUpStore} from "./store.js"
import fetchProducts from "./fetchProducts.js";
import setUpSearch from "./Filter/search.js";

async function init(){
  const loading=document.querySelector(".loading")

    if(store.length<1){
       const products=await fetchProducts();
       
       setUpStore(products)
    }
    console.log(store)
    displayProducts(store,document.querySelector(".products-container"));
    setUpCompanies(store);
    setUpPrice(store);
    setUpSearch(store);

    loading.style.display="none";
}

window.addEventListener("DOMContentLoaded",init)
