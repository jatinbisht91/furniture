
import "../js/Cart/toggleCart.js";
import { singleProductUrl } from "./utilis.js"
import { addToCart } from "./Cart/SetUpCart.js";
import "../js/Cart/toggleSideBar.js";

const imgDOM = document.querySelector('.single-product-img');
const titleDOM = document.querySelector('.single-product-title');
const companyDOM = document.querySelector('.single-product-company');
const priceDOM = document.querySelector('.single-product-price');
const colorsDOM = document.querySelector('.single-product-colors');
const descDOM = document.querySelector('.single-product-desc');
const cartBtn = document.querySelector('.addToCartBtn');
const centerDOM = document.querySelector('.single-product-center');
const title=document.querySelector(".title");
const loading=document.querySelector(".loading")
let productID;
async function init() {

    const searchURL = window.location.search;
    console.log(searchURL)
    try {
        const response = await fetch(`${singleProductUrl}${searchURL}`);
        if (response.status >= 200 && response.status <= 299) {

            const data = await response.json();
            console.log(data)
            const { id, fields } = data;
            productID = id;

            const { name, company, price, colors, description } = fields;
            const image = fields.image[0].thumbnails.large.url;
            console.log(image)
            document.title = `${name.toUpperCase()} | Comfy`;
            imgDOM.src = image;
            titleDOM.textContent = name;
            companyDOM.textContent = `by ${company}`;
            priceDOM.textContent = `${price}`;
            descDOM.textContent = description;
            title.textContent=`HOME/${name}`; 

            colors.forEach(color => {
                const span = document.createElement("span");
                span.classList.add("product-color");
                span.style.backgroundColor = `${color}`;
                colorsDOM.appendChild(span);
            })
        } else {
            centerDOM.innerHTML = `
        <div">
        <h3 class="text-4xl text-center mb-5 ">sorry, something went wrong</h3>
        <a href="index.html" class="px-6 py-2 bg-blue-100 uppercase rounded-full">back home</a>
        </div> 
         `;
        }
      loading.style.display="none";
    }
    catch (error) {
        console.log(error.message)
    }
    
}

window.addEventListener("DOMContentLoaded", init)

cartBtn.addEventListener("click", () => {
    addToCart(productID);
})