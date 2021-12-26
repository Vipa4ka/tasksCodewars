function isDivideBy(number, a, b) {
    if (number % a === 0 && number % b === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isDivideBy(-12, 2, -6));


// второй способ

// function isDivideBy(number, a, b) {
//   return (number%a + number%b) === 0
// }

// Your job is to create a function isDivideBy(or is_divide_by) to check если целое число numberis divisible by both integers aand b.

// Several cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true