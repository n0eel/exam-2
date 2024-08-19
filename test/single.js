import { findElement } from "./helper.js";

const elSingle = findElement(".single-product")
const elSingleImg = findElement("#single-img")

const id = localStorage.getItem("id") ? +localStorage.getItem("id") :1;
const products = JSON.parse(localStorage.getItem("products"))



const product = products.filter(element => element.id === id)[0]

elSingleImg = product.img