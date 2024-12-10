const $ = (selector) => document.querySelector(selector)

let imageNum = 0

$("#next").addEventListener("click", function(){
    next()
})
$("#prev").addEventListener("click", function(){
    prev()
})


function next(){
    imageNum++
    if(imageNum>11){
        imageNum=11
    }
    document.getElementById("rulesSS").src = "../images/rules-slideshow/rules"+imageNum+".jpg"
}
function prev(){
    imageNum--
    if(imageNum<0){
        imageNum=0
    }
    document.getElementById("rulesSS").src = "../images/rules-slideshow/rules"+imageNum+".jpg"
}