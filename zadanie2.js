//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function isPrimeNumber(num, result){
    if (num<=1000 && num!==0 && num!==1){
        if (num>=4) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0 || num < 4) {
                    result = `Число:${num} - составное`;
                    break;
                } else result = `Число:${num} - простое`;
            }
        }else result = `Число:${num} - простое`;
    }else result=`Данные неверны`
    return result;
}
let num1=2;
let num2=349;
let num3=25;
let num4=1001;
console.log(isPrimeNumber(num1));
console.log(isPrimeNumber(num2));
console.log(isPrimeNumber(num3));
console.log(isPrimeNumber(num4));