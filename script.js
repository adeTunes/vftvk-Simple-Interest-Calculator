var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;

var interest = principal * years * rate /100;

var year = new Date().getFullYear()+parseInt(years);

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}



function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;
    var result = document.getElementById("result")

    if (principal <= 0){
        alert("Enter a positive number")
        principal = document.getElementById("principal").focus()

    }
    else{
        result.innerText = "If you deposit " + principal + ", at an interest rate of " + rate + "%. You will receive an amount of " + interest + ", in the year " + year
    }

}
        