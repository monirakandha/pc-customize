
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

onClick("eightGB", "memory-cost" , "200" );
