//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function sumOfArgs(arg1){
    arg1=5;
    return function (arg2,sum){
        arg2=8;
        sum=arg1+arg2;
        return sum;
    }
}

const result = sumOfArgs();
console.log(result());