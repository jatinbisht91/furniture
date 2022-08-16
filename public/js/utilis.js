export const productsUrl = "https://course-api.com/javascript-store-products";
export const singleProductUrl =
    'https://course-api.com/javascript-store-single-product'

export const getStorageItem = (item) => {
   return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : [];
} 

export const setStorageItem=(item,data)=>{
   return localStorage.setItem(item,JSON.stringify(data))

}