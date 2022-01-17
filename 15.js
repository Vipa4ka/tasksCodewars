function simpleMultiplication(number) {
    if(number%2===0){
      return number*8;
    } else{
      return number*9;
    }   
}
console.log(simpleMultiplication(3));

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }


// Это ката об умножении заданного числа на восемь, если оно четное, и на девять в противном случае.