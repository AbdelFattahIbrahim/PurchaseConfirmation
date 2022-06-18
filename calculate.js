function getSumSpending(){

    var userPurchase = document.getElementById("thePurchase").value;
    var userPrice = document.getElementById("thePrice").value;
    
    alertOfThePurchase(userPurchase);
    alertOfThePrice(userPrice);
}

function alertOfThePurchase(purchasedItem){

    window.alert("You bought " + purchasedItem);
    
}
function alertOfThePrice(priceOfItem){

    window.confirm("for " + priceOfItem);
}