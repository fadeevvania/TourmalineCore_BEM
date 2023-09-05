const burger = document.querySelector("#burger")
const link = document.querySelector("#links")
const ul = document.querySelector("ul")
burger.addEventListener("click", () => {
    link.classList.toggle('link-open')
})
ul.addEventListener("click", () => {
    link.classList.toggle('link-open')
})

