const $ = (selector) => document.querySelector(selector);

$("#calc").addEventListener("click", function(){
    processEntry()
})

function processEntry(){
    var change = $("#total").value
    if(0>=change||change>99){
        alert("please enter a number between 1 and 99")
    }
    else{
        makeChange(change)
    }
}
function makeChange(change){
    $("#quarters").value = parseInt(change/25)
    $("#dimes").value = parseInt((change%25)/10)
    $("#nickels").value = parseInt((change%10)/5)
    $("#pennies").value = parseInt((change%5))
}