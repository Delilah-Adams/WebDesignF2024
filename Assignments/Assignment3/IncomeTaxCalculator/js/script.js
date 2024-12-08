const $ = (selector) => document.querySelector(selector);


$("#calculate").addEventListener("click", function() {
    processEntry()
});

$("#income").focus()


function processEntry(){
    var income = $("#income").value
    if(income<=0){
        alert("Income must be > 0")
    }
    else{
        calculateTax(parseInt(income))
    }
}

function calculateTax(income){
    var tax = 0
    if(income<=9875){
        $("#total").value = (income/10).toFixed(2)
    }
    else if(income<=40125){
        $("#total").value = (987.5+(income-9875)*.12).toFixed(2)
    }
    else{
        $("#total").value = (4617.5+(income-4617.5)*.22).toFixed(2)
    }
}