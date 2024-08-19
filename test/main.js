// import { findElement } from "./helper.js";

const findElement = (element, parent = document) => {
  return parent.querySelector(element);
};

let products = [
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "1", "rating": 8, "realPrice": 1163086, "newPrice": 1046777.4, "feedback": "19 отзыв(-ов)" },
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "2", "rating": 4, "realPrice": 1338232, "newPrice": 1204408.8, "feedback": "18 отзыв(-ов)" }, 
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "3", "rating": 10, "realPrice": 1790553, "newPrice": 1611497.7, "feedback": "4 отзыв(-ов)" }, 
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "4", "rating": 4, "realPrice": 1086105, "newPrice": 977494.5, "feedback": "2 отзыв(-ов)" }, 
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "5", "rating": 6, "realPrice": 1554681, "newPrice": 1399212.9, "feedback": "10 отзыв(-ов)" }, 
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "6", "rating": 7, "realPrice": 1467892, "newPrice": 1321102.8, "feedback": "17 отзыв(-ов)" }, 
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "7", "rating": 2, "realPrice": 1388171, "newPrice": 1249353.9, "feedback": "6 отзыв(-ов)" }, 
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "8", "rating": 4, "realPrice": 1854689, "newPrice": 1669220.1, "feedback": "3 отзыв(-ов)" }, 
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "9", "rating": 10, "realPrice": 772955, "newPrice": 695659.5, "feedback": "3 отзыв(-ов)" }, 
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "10", "rating": 3, "realPrice": 1996687, "newPrice": 1797018.3, "feedback": "5 отзыв(-ов)" }, 
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "11", "rating": 4, "realPrice": 1705109, "newPrice": 1534598.1, "feedback": "12 отзыв(-ов)" }, 
  { "title": "", "img": "./imgs/Rectangle 19.png", "id": "12", "rating": 10, "realPrice": 614534, "newPrice": 553080.6, "feedback": "17 отзыв(-ов)" }, 
]


const parentEl = document.getElementById("product-wrapper")
const templateEl = document.getElementById("template")
const elMinPrice = document.getElementById("#min-price")
const elMaxPrice = document.getElementById("#max-price")


function renderProducts() {
  parentEl.textContent = ""
  products.forEach((item) => {
    const newTemplate = templateEl.content.cloneNode(true)
    const elProductImg = findElement(".product-img", newTemplate)
    const elTitle = findElement(".title", newTemplate);
    const elPrice = findElement(".new-price", newTemplate);
    const elRealPrice = findElement(".old-price", newTemplate);
    const elFeedback = findElement(".reviews", newTemplate)
    // elProductImg.src = item.img
    elPrice.textContent = item.newPrice
    elRealPrice.textContent = item.realPrice
    elFeedback.textContent = item.feedback
    parentEl.appendChild(newTemplate)
  })
}

function filterCategory() {
  const callFunction = {
    "popularity": renderProducts,
    "priceFromUp": priceFilterFromUp,
    "priceFromDown": priceFilterFromDown
  }
  const value = findElement("#category").value
  callFunction[value]()
}

function priceFilterFromUp() {
  products.sort(function(first, second) {
    return second.newPrice - first.newPrice
  })
  renderProducts()
}

function priceFilterFromDown() {
  products.sort(function(first, second) {
    return first.newPrice - second.newPrice
  })
  renderProducts()
}

window.onload = filterCategory()

let sortedProducts = {}

elMinPrice.addEventListener("change", () => {
  if (elMinPrice.value < products.newPrice & elmaxPrice > products.elMaxPrice ) {
    renderProducts(sortedProducts)
  }else {
    renderProducts()
  }
})
