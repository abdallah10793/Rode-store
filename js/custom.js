
/* add to cart 

let carts = document.querySelectorAll('.add_cart');

let products = [
    {
        name: "Baby Girl's Dress",
        tag: "Purpel Dress",
        price: 75,
        inCart: 0
    },
    {
        name: "Women's Dress",
        tag: "ٌPurpel Dress",
        price: 68,
        inCart: 0
    },
    {
        name: "Women's Dress",
        tag: "Red Dress",
        price: 70,
        inCart: 0
    },
    {
        name: "Women's Dress",
        tag: "Dark Blue Dress",
        price: 75,
        inCart: 0
    },
    {
        name: "Women's Dress",
        tag: "Colors Dress",
        price: 58,
        inCart: 0
    },
    {
        name: "Women's Dress",
        tag: "Black Dress",
        price: 80,
        inCart: 0
    },
    {
        name: "Baby Girl's Dress",
        tag: "Blue Dress",
        price: 65,
        inCart: 0
    },
    {
        name: "Baby Girl's Dress",
        tag: "Gray Dress",
        price: 65,
        inCart: 0
    },
    {
        name: "Baby Girl's Dress",
        tag: "Black Dress",
        price: 65,
        inCart: 0
    },
    {
        name: "Men's Shirt",
        tag: "Green Shirt",
        price: 65,
        inCart: 0
    },
    {
        name: "Womwn's Dress",
        tag: "Move Dress",
        price: 65,
        inCart: 0
    }

]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}
// onload function to get number of products from localstorage
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers) {
        document.querySelector('.cart sup').textContent = productNumbers;

    }
}
// this Function to calculate Number of cart and appear it in html page
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart sup').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart sup').textContent = 1;
    }

    setItems(product)
}
function setItems(product) {
    console.log("inside of SetItems Funcrion");
    console.log("My Product is", product);
    product.inCart = 1;

    let cartItems = {
        [product.tag]: product
    }
    localStorage.setItem("productsInCart", cartItems)
}
onLoadCartNumbers()*/

//  Timer Trending product
// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

    // Get Time Units
    let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML =
        minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML =
        seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);

// back to top btn
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}