const plusBtn = document.querySelector(".product__quantity-plus");
const minusBtn = document.querySelector(".product__quantity-minus");
const producAddBtn = document.querySelector(".product__add-btn");
let quantitiy = parseInt(document.querySelector(".product__quantity_input").value);
let cartItemQuantity =  document.querySelector(".cart__item-quantitiy").textContent;
const profileCart = document.querySelector(".profile__cart");
const cartBody = document.querySelector(".cart__body");
const cartEmpty = document.querySelector(".cart__empty");
const cartBtn = document.querySelector(".profile__cart");
const cart = document.querySelector(".cart");
const cartItemTrash = document.querySelector(".cart__item-trash")
const badge = document.querySelector(".badge");


function toggleCart() {
    if(parseInt(document.querySelector(".cart__item-quantitiy").textContent) > 0){
        cartBody.classList.add("cart__body-active");
        badge.classList.add("badge-active");
        cartEmpty.classList.remove("cart__empty-active"); 
    }
    if(parseInt(document.querySelector(".cart__item-quantitiy").textContent) === 0) {
        cartEmpty.classList.add("cart__empty-active");
        cartBody.classList.remove("cart__body-active");
        badge.classList.remove("badge-active");
    }
}
toggleCart();

cartItemTrash.addEventListener("click", () => {
    document.querySelector(".cart__item-quantitiy").textContent = 0;
    toggleCart();
})

cartBtn.addEventListener("click", () => {
    cart.classList.toggle("cart_active")
})

plusBtn.addEventListener("click", ()=>{
    quantitiy++
    document.querySelector(".product__quantity_input").value = quantitiy;
});

minusBtn.addEventListener("click", ()=>{
    if(quantitiy>1)
    {   
        quantitiy--
        document.querySelector(".product__quantity_input").value = quantitiy;
    }
});

producAddBtn.addEventListener("click", () => {
    const cartItemQ = parseInt(document.querySelector(".cart__item-quantitiy").textContent);
    const  totalQ = cartItemQ + parseInt(document.querySelector(".product__quantity_input").value);
    const productPrice = document.querySelector(".product__total-price").textContent;
    const  total = totalQ * parseInt(productPrice);
    document.querySelector(".cart__item-quantitiy").textContent = totalQ;
    document.querySelector(".cart__item-total").textContent = "$" +total;
    document.querySelector(".cart__item-title").textContent = document.querySelector(".product__name").textContent;
    document.querySelector(".cart__item-single").textContent = productPrice;
    document.querySelector(".badge").textContent = totalQ;
    toggleCart();
});