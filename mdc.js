//Máximo divisor comum: O máximo divisor comum (mdc) de dois inteiros a, b é o maior número inteiro que divide a e b.//Máximo divisor comum: O máximo divisor comum (mdc) de dois inteiros a, b é o maior número inteiro que divide a e b.
var a = 8; // primeiro numero
var b = 6; //segundo numero
var divisor = 2;     
var mdc = 1;


    while (divisor <= a && divisor <= b) {
      
         if (a % divisor == 0 && b  % divisor == 0) {
         mdc *= divisor;
          a /= divisor;
          b /= divisor;
         divisor = 2;
        }
      
    else {
      divisor++;  
    } 

}

console.log(" O mdc dos numeros informados é " + mdc);
