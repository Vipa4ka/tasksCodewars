function solution(str, ending) {    
    let n = 0;
    const result1 = str.split('').reverse().join('');    
    const result2 = ending.split('').reverse().join('');
    if (n < ending.length) {
        for (var i = 0; i < str.length; i++) {
            return(result2[i] === result1[i]) ? true : false;
        //    const answer= (result2[n] === result1[n] && result2[n + 1] === result1[n + 1]) ? true : false;
            n += 1
            
        };
        return 
    };
};



console.log(solution('abc', 'bc'))
console.log(solution('abc', 'd'))
console.log(solution('sumo', 'omo'))
// Завершите решение, чтобы оно возвращало истину,если первый переданный аргумент(строка)
//  заканчивается вторым аргументом(также строкой).
// Примеры:
// solution('sumo', 'omo') // returns true
// solution('abc', 'd') // returns false