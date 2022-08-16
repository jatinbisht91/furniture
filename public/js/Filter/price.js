
import displayProducts from "../displayProducts.js";

const priceInput = document.querySelector(".price-filter");
const priceValue = document.querySelector(".price-value");
export const setUpPrice = (store) => {
    let maxPrice = store.map((product) => {
               return product.price;
    })
    maxPrice=Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice / 100);
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceInput.value=maxPrice;
    priceValue.textContent = `Value : $${maxPrice}`;
    priceInput.addEventListener("input", function price(e) {
        
        const value = parseInt(e.currentTarget.value);
        this.setAttribute("value",value)
        console.log(this)
        priceValue.textContent = `Value : $${value}`;
        let newStore=store.filter((product)=>product.price /100 <= value) 
        displayProducts(newStore,document.querySelector(".products-container"),true);
        if (newStore.length < 1) {
            const products = document.querySelector('.products-container');
            products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
          }   
    })
}


export default setUpPrice;