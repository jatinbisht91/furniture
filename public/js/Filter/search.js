import displayProducts from "../displayProducts.js";


function setUpSearch(store) {
    const formInput = document.querySelector(".form-input");
    const input = document.querySelector(".input");

    formInput.addEventListener("keyup", function (e) {
        if (e.target.nodeName === "INPUT") {
            const searchValue = e.target.value;
            if (searchValue) {
                const newStore = store.filter((product) => {
                    const { name } = product;
                    if (name.toLowerCase().startsWith(searchValue)) {
                        return product
                    }
                })
                displayProducts(newStore, document.querySelector(".products-container"), true);
                if (newStore.length < 1) {
                    const products = document.querySelector(".products-container");
                    products.innerHTML = `<h3 class="text-2xl font-bold">
       sorry, no products matched your search
       </h3>`;
                }
            }else {
                displayProducts(store, document.querySelector(".products-container"), true);
             } 
        
    }})
}

export default setUpSearch;