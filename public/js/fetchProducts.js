import { productsUrl } from "./utilis.js"


async function fetchProducts() {
    try {
        const response = await fetch(productsUrl);
        const data=await response.json();
        return data;

    } catch (error) {
       console.log(error)
    }
}

export default fetchProducts;