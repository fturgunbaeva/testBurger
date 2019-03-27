var btnChiken = document.querySelector('.button_chiken')
var btnMeat = document.querySelector('.button_meat')
var btnSalad = document.querySelector('.button_salad')
var ingridients = document.querySelector('.ingridients')
var price = document.querySelector('.price')


window.onload = function() {
    btnChiken.addEventListener('click', function(e) {
        ingridientClickHandler('burger_chiken', 100)               
    }) 

    btnMeat.addEventListener('click', function(e) {
        ingridientClickHandler('burger_meat', 125)       
    })

    btnSalad.addEventListener('click', function(e) {
        ingridientClickHandler('burger_salad', 50)        
    })
    
    function ingridientClickHandler(someClass, priceValue) {
        let newBtn = document.createElement('div')
        newBtn.className = someClass;
        ingridients.appendChild(newBtn);
        price.innerHTML = Number(price.innerHTML) + priceValue;
    }

    let btnCancel = document.querySelector('.button_cancel')
    btnCancel.addEventListener('click', function(e) {
        ingridients.innerHTML = '';
        price.innerHTML = 20;
    })
}