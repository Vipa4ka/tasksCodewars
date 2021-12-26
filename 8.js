function century(year) {
    const b = Math.floor(year / 100)
    if (year <= 1000) {
        return 1
    }        
    else if (year % 100 != 0) {
     return b+1
    }
    else  {
        return b
    }
}
// второй способ
// function century(year) {
//   let centuryCount = 0;
//   while (year > 0){
//     year = year - 100;
//     centuryCount = centuryCount + 1;
//   }
//   return centuryCount;
// }

console.log(century(1705));
console.log(century(1900));
console.log(century(17));
console.log(century(706246));







// Введение
// Первые пролеты века от года 1 до и включая 100 год, второй век - от года 101 до и включая 200 года, и т.д.

// Задача
// Учитывая год, верните век, в котором он находится.

// Примеры
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20