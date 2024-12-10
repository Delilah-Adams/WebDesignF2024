const $ = (selector) => document.querySelector(selector)
const emailPattern = /@/

$("#problem").addEventListener("click", function(){
    otherProblemInput()
})

function otherProblemInput(){
    if ($("#problem").value == "Other"){
        $("#otherInp").style.display = "inline-block"
    }
    else {
        $("#otherInp").style.display = "none"
    }
}

$("#feedback").addEventListener("submit", function(event){
    validateFeedback(event)
})

function validateFeedback(event) {
if($("#problem").value == "Other" && $("#otherInp").value == ""){
    event.preventDefault()
    alert("Please enter other issue.")
}
else if($("#description").value == ""){
    event.preventDefault()
    alert("Please describe issue.")
}
else if(!(emailPattern.test($("#email").value))){
    event.preventDefault()
    alert("Please enter email.")
}
}
