import displayProducts from "../displayProducts.js";

const companiesDom = document.querySelector(".companies");
export const setUpCompanies = (store) => {
    const companies = ['all', ...new Set(store.map(product => product.company))]
    companiesDom.innerHTML = companies.map((company) => {
        return `<button class="uppercase text-start company-btn">${company}</button>`
    }).join("");

    companiesDom.addEventListener("click", (e) => {
        let filteredProdutcs = [];
        let element = e.target;
        if (element.classList.contains("company-btn")) {
            if (element.textContent == "all") {
                filteredProdutcs = [...store]
            } else {
                filteredProdutcs = store.filter((product) => product.company === element.textContent)
            }
        }
        displayProducts(filteredProdutcs, document.querySelector(".products-container"), true)

    })
}