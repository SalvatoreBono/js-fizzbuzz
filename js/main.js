for (let i = 1; i <= 100; i++) {
    //"Se"  i % 3  e "Se" i % 5 stampa FizzBuzz
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log("FizzBuzz");
            //"Altrimenti" se non è divisibile per i % 5  stampa Fizz
        } else {
            console.log("Fizz");
        }
        // "Altriementi Se" i % 5 stampa Buzz
    } else if (i % 5 === 0) {
        console.log("Buzz");
        //"Altrimenti" stampa tutti gli "i"
    } else {
        console.log(i);
    }

}