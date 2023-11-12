let shoppingCart = document.querySelector(".fa-cart-shopping")
let addCart = document.querySelectorAll(".add")
let closeCart = document.querySelector(".close")
// let plus = document.querySelector(".fa-plus")
// let minus = document.querySelector(".fa-minus")
let cart = document.querySelector(".boxes")
let allContent = document.querySelector(".allContent")
let total = document.querySelector(".total div h4")
let numberOfProduct = document.querySelector(".number p")
let span = document.querySelector("span")
let numOfprod = 0;
let products = [
    {
        id: 1,
        img: "0623-mac-and-cheese-recipe-lede.webp",
        title: "Melted Fennel Pasta",
        price: 50,
    },
    {
        id: 2,
        img: "20230712-1023-DINNER-IS -SERVED-28440.webp",
        title: "Shaved fennel Salad With Croutons",
        price: 70,
    },
    {
        id: 3,
        img: "20230712-1023-DINNER-IS -SERVED-28462.webp",
        title: "Potatoes au Gratin",
        price: 100,
    },
    {
        id: 4,
        img: "20230712-1023-DINNER-IS -SERVED-28649.webp",
        title: "Extra Corny Muffins",
        price: 55,
    },
    {
        id: 5,
        img: "20230712-1023-DINNER-IS -SERVED-28680.webp",
        title: "Creamy Pumpkin Pasta",
        price: 65,
    },
    {
        id: 6,
        img: "20230726-1023-PANTRY-1391 1.webp",
        title: "Teriyaki Style Brussels Sprouts",
        price: 80,
    },
    {
        id: 7,
        img: "20230823-1123-THANKSGIVING-WELL-1081 1.webp",
        title: "Stuffing Crusted Fish",
        price: 90,
    },
    {
        id: 8,
        img: "20230911-1123-FOB-0759 2.webp",
        title: "Citrus Butter Scallops",
        price: 70,
    },
    {
        id: 9,
        img: "20231020-WEB-4032 1.webp",
        title: "Pasta With 20 Cloves of Garlic",
        price: 55,
    },
    {
        id: 10,
        img: "20231020-WEB-4069.webp",
        title: "Pancit Sotanghon",
        price: 60,
    },
    {
        id: 11,
        img: "BA_Este_94852_RET.webp",
        title: "Shabu Shabu Noodle Soup",
        price: 110,
    },
    {
        id: 12,
        img: "KuyaLord_BonAppetit_0-2539_RET.webp",
        title: "BA's Best Mac and Cheese",
        price: 100,
    }
];
let listCards = []
function addProducts () {
    let newDiv = document.createElement("div") 
    newDiv.classList.add("content")
    products.forEach((value,key) => {  
        newDiv.innerHTML += `
        <div class="card">
            <img src="css/${value.img}" alt="">
            <div>
                <h3>${value.title}</h3>
                <p>${value.price}</p>
                <button onclick="addBox(${key})" class="btn add">Add To Card</button>
            </div>
        </div>
        `
    })
    allContent.appendChild(newDiv);
}
addProducts()
let totalClose = document.getElementById("#total")
shoppingCart.addEventListener('click', function () {
    document.body.classList.add("active");
})

closeCart.addEventListener("click", function() {
    document.body.classList.remove("active")
})
function addBox(key) {
    if (listCards[key] == null) {
        listCards[key] = Object.assign({}, products[key]);
        listCards[key].quantity = 1;
        numOfprod++;
    } else {
        listCards[key].quantity++;
        changeQuantity(key,listCards[key].quantity)
    }
    reloadCard();
}
function reloadCard () {
    cart.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice += value.price;
        count += value.quantity;
        if (value != null && value.quantity !== 0) {
            let box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <div>
                    <img src="css/${value.img}">
                    <h3>${value.title}</h3>
                </div>
                <div class=""price>${value.price}</div>
                <div class="number">
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <p>${value.quantity}</p>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            cart.appendChild(box)
        }
    })
    total.textContent = "Total Price Is: " + totalPrice;
    numberOfProduct = count;
    span.textContent = numOfprod
    
}

function changeQuantity(key, quantity) {
    if (listCards[key].quantity !== 0) {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * Object.assign({}, products[key]).price;
    } else if (listCards[key].quantity == 0) {
        delete listCards[key];
        numOfprod--;
        span.textContent = numOfprod;
    }
    reloadCard();
}
