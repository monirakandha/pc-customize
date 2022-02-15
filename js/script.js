
function updatePrice (iteamId , price){
    const memoryCost = document.getElementById(iteamId);
    memoryCost.innerText = price;
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;
    

    const totalPrice = parseFloat(bestPrice)  +parseFloat (memoryPrice) + parseFloat (storagePrice) + parseFloat (deliveryPrice);

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;

};

//onlcick function 
function onClick (clickId , updateId , price){
    document.getElementById(clickId).addEventListener("click",function(){
        updatePrice(updateId , price);
        document.getElementById(clickId).style.backgroundColor = "cornflowerblue"
});
}
//ADD all id with parameter
onClick("eightGB", "memory-cost" , 200 );
onClick("sixteenGB" , "memory-cost" , 300);
onClick("ssd1" , "storage-cost" , 700);
onClick ("ssd2" , "storage-cost" , 1300);
onClick ("ssd3" , "storage-cost" , 2500);
onClick("free-delivery" , "delivery-cost" , 0);
onClick("paid-delivery" , "delivery-cost" , 40);


//coupon code 
const couponCode = "pHero";
document.getElementById("apply-btn").addEventListener('click', function(){
    const promoInput = document.getElementById("promo-input").value;
    if(promoInput === couponCode){
        const total = document.getElementById("total-price");
        let totalPrice = parseFloat(total.innerText);
        const discount = (totalPrice*20)/100;
        totalPrice = totalPrice - discount;

        total.innerText = totalPrice;
        
    }
    else{
        
    }
    promoInput.value = ''; 
});
