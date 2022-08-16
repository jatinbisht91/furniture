import {addToCart} from "./Cart/SetUpCart.js"


const displayProducts = (products, element, filter) => {
  element.innerHTML = products.map((product) => {
    const { id, name, image, price } = product;
    return `<article>
        <div class="product-container">
        <img  class="h-[300px] w-full md:h-[200px] object-cover rounded-lg" src="${image}" alt="${name}" />
        <div class="icons-container">
              <a href="product.html?id=${id}" class="">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
            <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${price}</h4>
          </footer>

        </div>
      </article>
      `
  }).join("")

  if (filter) return;

  element.addEventListener("click", (e) => {
    let parent = e.target.parentElement;
    if (parent.classList.contains("product-cart-btn")) {
      console.log(parent.dataset.id);
      addToCart(parent.dataset.id)
    }

  })
}

export default displayProducts;