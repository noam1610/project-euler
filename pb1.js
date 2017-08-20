//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

var sumF = function(N){
    var somme = 0;
    for (var i = 0; i < N; i++) {
        if(i % 3 == 0 || i % 5 == 0){
            somme += i;
        }
    }
    return somme;
}
console.log(sumF(10));
console.log(sumF(1000));