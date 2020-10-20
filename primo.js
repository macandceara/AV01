//Número é primo: Um número inteiro positivo n é primo se for divisível apenas por 1 e por 

//Número é primo: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n.
var num = 0;

function primo(num) {
    for (var divisor = 2; divisor < num ; divisor++) {
            if (num % divisor === 0) {
                return false;
            }
    }
    return num > 1;
}
 
console.log(" O numero " +num+ " é primo ? " + primo(num));
