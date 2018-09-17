// Opdracht 1
let testNumber = 5; // definieert het nummer
// if else structure
if (testNumber % 2 == 1) { //vult nummer in om het door 2 te delen
    console.log("Dit is een oneven nummer.")
} else {
    console.log("Dit is een even nummer.")
}

// Opdracht 2
const falseSentence = "Programming is not so cool";
let trueSentence = falseSentence.replace("not ", ""); // replace het woord not en een spatie met niks om het gewenste resultaat te krijgen
console.log(trueSentence);

// Opdracht 3
const numberValue = 1400;
const textString = "Ik woon in Naboo";
console.log(numberValue == textString);
/* Dit is geen slimme vraag, omdat je vraagt om een integer met een string te vergelijken.
Wat er ook gebeurt, een integer is altijd verschillend van een string, en zal dus altijd 'false' aangeven.
Redelijk saai. */