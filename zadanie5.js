//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

const pow = (x,n) => {
    let temp = x;
    if (n!==0) {
        for (let i = 1; i < n; i++) {
            temp *= x;
        }
    }else temp=1;
    console.log(temp);
    return temp;
}
pow(5,5);