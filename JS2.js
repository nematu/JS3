


function myFunction() {
    let number = document.getElementById("inputNum").value;
    let error = document.getElementById("error");
    if(number < 1 || number === ""){
        error.className = "showError";
    }

    for (let x = 1; x <= number; x++)
    {
        //if number divides even by #3 and #5
        if (x % 3 === 0 && x % 5 === 0) {
            document.write("Hee Haw!" + "<br>");
        }
        //if number divides even by #5
        else if (x % 5 === 0) {
            document.write("Haw!" + "<br>");
        }
        // if number divides even by #3
        else if (x % 3 === 0) {
            document.write("Hee!" + "<br>");
        }
        // otherwise print rest of numbers
        else {
            document.write(x + "<br>");
        }
    }

}
