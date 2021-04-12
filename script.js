function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);

    if (isNaN(principal) || principal <= 0) {
        alert("Enter a positive number for 'Amount'");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML = "if you deposit <mark>$" + parseFloat(principal).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</mark>,<br>at an interest rate of <mark>" + rate + "%</mark>.<br>You will receive an amount of <mark>$" + interest.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</mark>,<br>in the year <mark>" + year + "</mark>.<br>";
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
        