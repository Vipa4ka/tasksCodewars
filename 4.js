function addBinary(a,b) {
    return(a + b).toString(2);
}




console.log (addBinary(1, 2));
console.log (addBinary(1, 1));
console.log (addBinary(5, 9));

// Реализуйте функцию, которая складывает два числа и возвращает их сумму
//  в двоичном формате.Преобразование может быть выполнено до или после добавления.

// Возвращаемое двоичное число должно быть строкой.

//     Примеры: (Input1, Input2 -> Output(объяснение)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)