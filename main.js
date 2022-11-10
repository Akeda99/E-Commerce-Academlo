import {load} from './load.js'
import { darkTheme } from './darkTheme.js'
import { headerScroll } from './headerScroll.js';
const icon_menu= document.querySelector(".icon_menu");
const menu= document.querySelector(".menu");
const home=document.querySelector(".home");
const products=document.querySelector(".products");
const icon_x=document.querySelector(".icon_x");
const Hoodies_products=document.querySelector(".Hoodies_products");
const content_cartshop=document.querySelector(".content_cartshop");
const shop_cart=document.querySelector(".shop_cart");
const content_cartshop_items=document.querySelector(".content_cartshop_items");


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
shop_cart.addEventListener("click",function(){
    content_cartshop.classList.toggle("content_cartshop_show");
});

function printClothes(){
    let html="";

clothes.forEach(({id, name, price, image, category, quantity})=> {
    html+= `
    <div class="clothes_products">
        <div class="img_products">
            <img src="${image}" alt="${category}" class="img_size">
        </div>
        <div class="products_data">
        <h2>$${price}.00<span>| Stock: ${quantity}</span></h2>
        <h3>${name}</h3>
        <button class="boton_plus btn_add" id="${id}">+</button>
        </div>
        </div>
    
    `;
})
Hoodies_products.innerHTML= html;
}
printClothes();

function printClothesInCart(){
    let html = ''

    const arrayCartShop=Object.values(objCartShop);

    arrayCartShop.forEach( ({id, name, price, image, category, quantity,amount})=>{
        html+=`    <div class="clothes_products_shop">
        <div class="img_text_shop">
        <div class="img_shop">
            <img src="${image}" alt="${category}" class="img_size_shop">
        </div>
        <div class="products_data_shop">
        <h2 class="type_clothe_shop">${name}</h2>
        <div class="stock_price">
        <p><span>Stock:${quantity} | </span>$${price}.00 </p>
        </div>
        
        <h3 class="text_subtotal">Subtotal:</h3>
        
        <div class="clothes_options_shop">
        <button class="btn btn_rest" id="${id}">-</button>
        <p>${amount} units</p>
        <button class="btn btn_add1" id="${id}">+</button>
        <button class="btn btn_del" id="${id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="btn btn_del" id="${id}"viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg></button>
     
        </div>
        </div>
        </div>
        </div>`
    });
    content_cartshop_items.innerHTML=html
}

let objCartShop={};

Hoodies_products.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn_add')){

        const idClothes = Number(e.target.id);
        
        const currentClothes=clothes.find((clothes)=>clothes.id===idClothes);

        if(objCartShop[currentClothes.id]){
            objCartShop[currentClothes.id].amount++;
        }else{
            objCartShop[currentClothes.id]=currentClothes;
            objCartShop[currentClothes.id].amount=1;
        }
        printClothesInCart();
    }
});
content_cartshop.addEventListener('click',(e)=>{
    
    if(e.target.classList.contains('btn_add1')){
        const idClothes=Number(e.target.id);
        objCartShop[idClothes].amount++;
    }
    if(e.target.classList.contains('btn_rest')){
         const idClothes=Number(e.target.id);
         objCartShop[idClothes].amount--;
    }
    
    if(e.target.classList.contains('btn_del')){
         const idClothes=Number(e.target.id);
        delete objCartShop[idClothes];
    }
    
    printClothesInCart();
})
document.addEventListener('DOMContentLoaded', function () {
    darkTheme()
    headerScroll()
})