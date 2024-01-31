//Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


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

    // (IF) voglio che i multipli di 3 abbiano stampato "Fizz" al posto del numero
    if (i % 3 == 0) {
        squareElement.className += " fizz";

        // (ELSE IF) voglio che i multipli di 5 abbiano stampato "Buzz"
    } else if (i % 5 == 0) {
        squareElement.className += " buzz";

        // (ELSE IF) voglio che sia i multipli di 3 che di 5 abbiano stampato "FizzBuzz"

    }



