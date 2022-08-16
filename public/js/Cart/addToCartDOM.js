
const cart_items= document.querySelector(".cart_items");

const addToCartDOM = ({ id, name, price, image, amount }) => {
    const article = document.createElement('article');
    article.classList.add('cart-item');
    article.setAttribute('data-id', id);
    article.innerHTML = `
      <img src="${image}"
                class="cart-item-img"
                alt="${name}"
              />  
              <div>
                <h4 class="mb-1 text-xl md:text-2xl">${name}</h4>
                <p class="">${price}</p>
                <button class="cart-item-remove-btn" data-id="${id}">remove</button>
              </div>
            
              <div>
                <button class="cart-item-increase-btn" data-id="${id}">
                  <i class="fas fa-chevron-up"></i>
                </button>
                <p class="cart-item-amount" data-id="${id}">${amount}</p>
                <button class="cart-item-decrease-btn" data-id="${id}">
                  <i class="fas fa-chevron-down"></i>
                </button>
              </div>
    `;
    cart_items.appendChild(article);
  };

  export default addToCartDOM;