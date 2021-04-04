//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

function printNum(from,to){
    let current = from;

    function go(){
        console.log(current);
        if (current === to){
            clearInterval(timerId);
        }
        current+=1;
    }
    go();
    let timerId = setInterval(go,1000);
}
printNum(5,15);
