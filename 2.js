function findEvenIndex(arr)
{
    // console.log()

    const first = arr.indexOf(0)+1,
        last = arr.lastIndexOf(0);

    console.log(first)
    console.log(last)
    console.log(last-first)
  return arr.splice(first, last-first).reduce((a, b)=>a+b, 0)
//     let sum = 0;
//     let n = 0;
//     let a = 0;

// arr.forEach(function(elem, index, ar) {
//     // sum += elem;
    
//     // элемент
//     a = ar[n]
//     console.log(a)
//     // сумма элементов
//     sum += a
//     console.log(sum)
//     let v = sum + a
    
//     // console.log(v) 
//     n += 1

    
// });

}


console.log(findEvenIndex([1, 3, 5, 2, 10]));

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));





// Вам будет дан массив целых чисел. Ваша задача - взять этот массив и найти индекс N, в котором сумма целых чисел слева от N равна сумме целых чисел справа от N. Если нет индекса, по которому это могло бы произойти, вернитесь -1.
// Например:
// Допустим, вам дан массив {1,2,3,4,3,2,1}:
// ваша функция вернет индекс 3, потому что в 3-й позиции массива сумма левой части index ( {1,2,3}) и сумма правой части index ( {3,2,1}) равны 6.
// Посмотрим еще на один.
// Вам дан массив {1,100,50,-51,1,1}:
// ваша функция вернет индекс 1, потому что в 1-й позиции массива сумма левой части index ( {1}) и сумма правой части index ( {50,-51,1,1}) равны 1.
// Последний:
// вам дан массив с {20,10,-80,10,10,15,35}
// индексом 0, левая сторона - {}
// правая сторона. {10,-80,10,10,15,35}
// Они оба равны 0при добавлении. (Пустые массивы в этой задаче равны 0)
// Индекс 0 - это место, где левая и правая стороны равны.
// Примечание: помните, что в большинстве языков программирования / сценариев индекс массива начинается с 0.
// Вход:
// целочисленный массив длины 0 < arr < 1000. Числа в массиве могут быть любыми целыми положительными или отрицательными.
// Выходные данные:
// наименьший индекс, в Nкотором сторона слева Nравна стороне справа N. Если вы не найдете индекс, соответствующий этим правилам, вы вернетесь -1.
// Примечание.
// Если вам дан массив с несколькими ответами, верните наименьший правильный индекс.