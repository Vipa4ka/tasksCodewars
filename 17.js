const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg*fuelLeft>=distanceToPump ? true : false
};

console.log(zeroFuel(100, 50, 1));


// Вы были в походе с друзьями далеко от дома, но когда пришло время возвращаться, вы понимаете, что топливо на исходе, а ближайшая заправка 50далеко! Вы знаете, что в среднем ваш автомобиль расходует около 25миль на галлон. Остаются 2галлоны. Учитывая эти факторы, напишите функцию, которая говорит вам, можно ли добраться до насоса или нет. Функция должна возвращать true( 1в Прологе и NASM), если это возможно, и false( 0в Прологе и NASM), если нет. Входные значения всегда положительны.