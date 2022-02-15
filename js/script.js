
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

function onClick (clickId , updateId , price){
    document.getElementById(clickId).addEventListener("click",function(){
        updatePrice(updateId , price);
        });
}

onClick("eightGB", "memory-cost" , 200 );
onClick("sixteenGB" , "memory-cost" , 300);
onClick("ssd1" , "storage-cost" , 700);
onClick ("ssd2" , "storage-cost" , 1300);
onClick ("ssd3" , "storage-cost" , 2500);
onClick("free-delivery" , "delivery-cost" , 0);
onClick("paid-delivery" , "delivery-cost" , 40);
