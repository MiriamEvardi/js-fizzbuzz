//memorizzo la costante della griglia
const gridElement = document.querySelector("#grid");

//creo il codice da ripetere da 1 a 100 
for (let i = 1; i <= 100; i++) {

    //creo dei quadrati nell'HTML
    const squareElement = document.createElement("div");

    //li stampo in pagina
    gridElement.append(squareElement);

    squareElement.className = "square";
    squareElement.innerHTML = i;
    squareElement.style.color = "white";
    squareElement.style.fontWeight = "bold";
    squareElement.style.fontSize = "24px";
    squareElement.style.backgroundColor = "rgb(223, 194, 250";

    // (IF) voglio che i multipli di 3 abbiano stampato "Fizz" al posto del numero
    if (i % 3 == 0) {
        squareElement.innerText = "Fizz";
        squareElement.style.backgroundColor = "rgb(182, 100, 241)";
    }

    // (IF) voglio che i multipli di 5 abbiano stampato "Buzz"
    if (i % 5 == 0) {
        squareElement.innerText = "Buzz";
        squareElement.style.backgroundColor = "rgb(81, 157, 255)";
    }

    // (IF) voglio che sia i multipli di 3 che di 5 abbiano stampato "FizzBuzz"
    // altrimenti fare la moltiplicazione 3 * 5 ?
    if (i % 3 == 0 && i % 5 == 0) {
        squareElement.innerText = "FizzBuzz";
        squareElement.style.backgroundColor = "rgb(81, 10, 180)";
    }
}



