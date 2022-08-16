const bars = document.querySelector(".bars");
const sideOverlay = document.querySelector(".sidebar-overlay")
const sidebarClose=document.querySelector(".sidebar-close")


bars.addEventListener("click", () => {
    sideOverlay.classList.add("show")
})

sidebarClose.addEventListener("click",()=>{
    sideOverlay.classList.remove("show") 
})