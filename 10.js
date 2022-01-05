function fakeBin(x){
    let i = 0;
    while (i < x.length) {
        if (x[i] < 5) {
            x[i] === 0;
            console.log(x[i])
            i += 1;
            console.log(x[i])
        }
        else {
            x[i] === 1;
            i += 1
        }
        return (x);
    }
    
}




console.log(fakeBin('45385593107843568'));

console.log(fakeBin('509321967506747'));

console.log(fakeBin('366058562030849490134388085'));


// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру от 5 и выше на «1». Верните полученную строку.

// Примечание: ввод никогда не будет пустой строкой