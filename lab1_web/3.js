//Написати функцію, яка порахує перші n числа Фібоначі

var n = 10; // Скільки елементів хочемо отримати 
var fibonacci = [0, 1]; // Перші два елемента послідовності Фібоначі 

for (i = 2; i < n; i ++) {
  // Получаємоi-й елемент послідовності як сума попередніх двох 
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci.slice(0,n));
// slice відрізає від масива перші n елементів, якщо  n < 2