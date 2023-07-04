const box = document.getElementById("container-dom");

for (let i = 1; i <= 100; i++) {
    const cell = document.createElement("div");
    cell.innerHTML = i.toString();
    cell.classList.add("cell-custom")
    //"Se"  i % 3  e "Se" i % 5 stampa FizzBuzz
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log("FizzBuzz");
            cell.classList.add("bg-red");
            cell.innerHTML = "FizzBuzz";
            //"Altrimenti" se non è divisibile per i % 5  stampa Fizz
        } else {
            cell.classList.add("bg-green");
            console.log("Fizz");
            cell.innerHTML = "Fizz";
        }
        // "Altriementi Se" i % 5 stampa Buzz
    } else if (i % 5 === 0) {
        cell.classList.add("bg-yellow");
        console.log("Buzz");
        cell.innerHTML = "Buzz";

        //"Altrimenti" stampa tutti gli "i"
    } else {
        console.log(i);
        cell.classList.add("bg-blue");
    }


    box.append(cell);
}
