// Alert Name

document.getElementById("alertName").onclick = function(){
    document.getElementById("statement").innerHTML =  alert("Wahab Ashraf")
}

// Alert Number

document.getElementById("alertNumber").onclick = function(){
    document.getElementById("statement").innerHTML = alert("2")
}

// Show Variable Name

document.getElementById("var").onclick = function(){
    let varName;
    document.getElementById("statement").innerText = "Wahab"
    document.getElementById("output").innerText = "Ashraf"
}

// CamelCase

document.getElementById("camel").onclick = function(){
    document.getElementById("statement").innerHTML = "Camel Case"
    document.getElementById("output").innerHTML =  "It is a Camel Case"
}


// Sum

document.getElementById("sum").onclick = function(){
    document.getElementById("statement").innerHTML = "1+2"
    document.getElementById("output").innerHTML = 3
}

// Subtract

document.getElementById("sub").onclick = function(){
    document.getElementById("statement").innerHTML = "2-3"
    document.getElementById("output").innerHTML = -1
}

// Multiply

document.getElementById("mul").onclick = function(){
    document.getElementById("statement").innerHTML = "2*3"
    document.getElementById("output").innerHTML = 6
}

// Cal some num

document.getElementById("cal").onclick = function(){
    document.getElementById("statement").innerHTML = "2+3*(6/2)"
    document.getElementById("output").innerHTML = "<del>15</del> <ins>11</ins>"
}

// clear Statement

document.getElementById("clearStatement").onclick = function(){
    document.getElementById("statement").innerText = ""
}

// clear Statement

document.getElementById("clearoutput").onclick = function(){
    document.getElementById("output").innerText = ""
}