const $ = (selector) => document.querySelector(selector);


$("#calculate").addEventListener("click", function() {
    processEntries()
});
$("#clear").addEventListener("click", function(){
    clearFields()
})
$("#subtotal").addEventListener("click", function(){
    clearField(this)
})
$("#taxRate").addEventListener("click", function(){
    clearField(this)
})

$("#subtotal").focus()


function processEntries(){
    let sub = $("#subtotal").value
    let rate = $("#taxRate").value/100
    if(0>=sub||sub>=10000){
        alert("Subtotal should be > 0 and < 10000")
        $("#subtotal").focus()
    }
    else if(0>=rate|| rate>=.12){
        alert("tax rate should be > 0 and < 12")
        $("#taxRate").focus()
    }
    else{

        $("#salesTax").value = sub*rate
        $("#total").value = (parseFloat(sub)+sub*rate)
        $("#subtotal").focus()
    }
}

function clearField(selector){
    selector.value = ""
}

function clearFields(){
    clearField($("#subtotal"))
    clearField($("#taxRate"))
    clearField($("#salesTax"))
    clearField($("#total"))
    $("#subtotal").focus()
}