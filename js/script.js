const plusBtn = document.querySelector(".product__quantity-plus");
const minusBtn = document.querySelector(".product__quantity-minus");
let quantitiy = parseInt(document.querySelector(".product__quantity_input").value);
    
plusBtn.addEventListener("click", ()=>{
    quantitiy++
    document.querySelector(".product__quantity_input").value = quantitiy;
});

minusBtn.addEventListener("click", ()=>{
    if(quantitiy>0)
    {   
        quantitiy--
        document.querySelector(".product__quantity_input").value = quantitiy;
    }
});