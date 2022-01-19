function updateLight(current) {  
    switch (current) {
        case "green":
            return "yellow";
        case "yellow":
            return "red";
        case "red":
            return "green";
        default:
            return
    } 
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));




// Вы пишете код для управления светофорами в вашем городе. Вам нужна функция для обработки каждого изменения с green, на yellow, на red, а затем greenснова на .

// Завершите функцию, которая принимает строку в качестве аргумента, представляющую текущее состояние источника света, и возвращает строку, представляющую состояние, в которое свет должен измениться.

// Например, update_light('green')должен вернуть 'yellow'.