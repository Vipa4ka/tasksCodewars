function solution(str, ending) {
    const result1 = str.split('').reverse().join('');
    const result2 = ending.split('').reverse().join('');
    let i = 0
    if (result2.length === 0 || result1.length === 0) {
        return true
    } else {
        while (i < ending.length - 1) {
            const o =(result2[i] === result1[i]) ? true : false;             
            if (o === false) {
                break;
            }
            i += 1;
        };
        return (result2[i] === result1[i]) ? true : false;
    };
};

// 2 способ
// const solution = (str, ending) => str.endsWith(ending);


console.log(solution(  ':-)',   ':-(')  )
console.log(solution('abc', ''))
console.log(solution('abc', 'bc'))
console.log(solution('abc', 'd'))
console.log(solution('sumo', 'omo'))
// Завершите решение, чтобы оно возвращало истину,если первый переданный аргумент(строка)
//  заканчивается вторым аргументом(также строкой).
// Примеры:
// solution('sumo', 'omo') // returns true
// solution('abc', 'd') // returns false