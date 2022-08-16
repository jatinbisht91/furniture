import { getStorageItem, setStorageItem } from "../../js/utilis.js"
import { store } from "../../js/store.js"
import { openCartItemsList } from "./toggleCart.js";
import addToCartDOM from "./addToCartDOM.js";
const totalItemsInCart = document.querySelector("#totalItems");


const cart_items = document.querySelector(".cart_items");

let cart = getStorageItem("cart");
export const addToCart = (id) => {
    console.log(store);
    const item = cart.find((cartItem) => cartItem.id === id);
    if (!item) {
        const product = store.find((product) => product.id === id);

        cart = [...cart, { ...product, amount: 1 }]
        addToCartDOM({ ...product, amount: 1 });
        console.log(cart);
    } else {
        cart = cart.map((item) => {
            if (item.id == id) {
                item = { ...item, amount: item.amount + 1 }
            }
            return item;
        })
        console.log(cart)
        const amountDOM = cart.find((cartItem) => cartItem.id === id);
        const newAmount = [...document.querySelectorAll(".cart-item-amount")].find((value) => value.dataset.id === id);

        newAmount.textContent = amountDOM.amount;

        setStorageItem("cart", cart);
    }

    totalCartItems();
    openCartItemsList();
    totalCartValue();
}

const totalCartItems = () => {
    let total = cart.reduce((total, current) => {
        return total += current.amount;
    }, 0)
    totalItemsInCart.innerText = total;
}

function displayCartItemsDom() {
    cart.forEach((product) => {
        addToCartDOM(product);
    })
}


function totalCartValue() {
    const totalMoney = document.querySelector(".total-money");
    const total = cart.reduce((total, current) => {
        return total += (current.amount) * (current.price);
    }, 0)
    console.log(total, totalMoney)
    totalMoney.textContent = total;
}

function increaseAmount(id) {
    let newAmount;
    cart = cart.map(product => {
        if (product.id === id) {
            newAmount = product.amount + 1;
            product = { ...product, amount: newAmount }
        }
        return product;
    })
    return newAmount;
}

function decreaseAmount(id) {
    let newAmount;
    cart = cart.map(product => {
        if (product.id === id) {
            newAmount = product.amount - 1;
            product = { ...product, amount: newAmount }
        }
        return product;
    })
    return newAmount;
}

function setUpCartFunctionality() {
    cart_items.addEventListener("click", (e) => {
        const parentID = e.target.parentElement.dataset.id;
        const element = e.target;
        const parent = e.target.parentElement;
        console.log(e.currentTarget)
        if (element.classList.contains("cart-item-remove-btn")) {
            remove(element.dataset.id);
            element.parentElement.parentElement.remove();
        }
        if (parent.classList.contains('cart-item-increase-btn')) {

            const newAmount = increaseAmount(parentID);
            console.log(newAmount)
            parent.nextElementSibling.textContent = newAmount;
        }
        if (parent.classList.contains('cart-item-decrease-btn')) {
            const newAmount = decreaseAmount(parentID)
            if (newAmount === 0) {
                remove(parent.dataset.id);
                parent.parentElement.parentElement.remove();
            } else {
                parent.previousElementSibling.textContent = newAmount;
            }

        }



        setStorageItem("cart", cart);
        totalCartItems();
        totalCartValue();
    })

}

function remove(id) {
    cart = cart.filter((product) => {
        return product.id !== id
    })

}


function init() {

    totalCartItems();
    displayCartItemsDom();
    totalCartValue();
    setUpCartFunctionality();
}

init()