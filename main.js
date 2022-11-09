import {load} from './load.js'

const icon_menu= document.querySelector(".icon_menu");
const menu= document.querySelector(".menu");
const home=document.querySelector(".home");
const products=document.querySelector(".products");
const icon_x=document.querySelector(".icon_x");
// const letter_color=document.querySelector(".letter_color")
window.addEventListener('load', function () {
    load()
  })
  
icon_menu.addEventListener("click", function(){
    menu.classList.toggle("menu_show");
    icon_x.classList.toggle("icon_show");
  
    
})
home.addEventListener("click", function(){
    home.classList.toggle("color");
    setTimeout(() => {
        home.classList.toggle("color")
    }, 1500);
    menu.classList.toggle("menu_show");
    icon_x.classList.toggle("icon_show");
})
products.addEventListener("click", function(){
    products.classList.toggle("color");
    setTimeout(() => {
        products.classList.toggle("color")
    }, 1500);
    menu.classList.toggle("menu_show");
    icon_x.classList.toggle("icon_show");
})
icon_x.addEventListener("click", function(){
    icon_x.classList.toggle("icon_show");
    menu.classList.toggle("menu_show");
})

const clothes =[
{
    id:1,
    name:'Hoodies',
    price: 14.00,
    image: './assets/featured1.png',
    category: 'hoodies',
    quantity:10
},
{
    id:2,
    name:'Shirts',
    price: 24.00,
    image: './assets/featured2.png',
    category: 'shirts',
    quantity:15
},
{
    id:3,
    name:'Sweatshirts',
    price: 24.00,
    image: './assets/featured3.png',
    category: 'sweatshirts',
    quantity:20
},
];


