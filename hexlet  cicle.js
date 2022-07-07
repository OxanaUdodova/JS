/* Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке.  */

const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
    while (initialNumber >= 1) {
    console.log(initialNumber)
    initialNumber-=1;
  }
  console.log("finished!");
  // END
};

export default printNumbers;


// Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку

const joinNumbersFromRange = (start, finish) => {
  let result = "";
  let i = start;
  while (i <= finish) {
  result = `${result}${i}`;
  i = i +1;
}
return result;}
// END

export default joinNumbersFromRange;



/*Реализуйте функцию mySubstr(), которая извлекает из строки подстроку указанной длины. Она принимает на вход два аргумента (строку и длину) и возвращает подстроку, начиная с первого символа*/
const mySubstr = (text, length) => {
  let i = 0;
  let result = '';
  while (i < length)
  {result = `${result}${text[i]}`;
  i = i + 1;
  }
  return result;
}
// END 

export default mySubstr;



/*Функция countChars() из теории считает, сколько раз входит буква в предложение и 
при этом учитывает регистр букв. То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен*/

const countChars = (text, letter) => {
  let text1 = text.toLowerCase();
  let letter1 = letter.toLowerCase();
  let i = 0;
  let counter = 0;
  while (i < text1.length)
  {if (text1[i] === letter1)
  {counter = counter + 1;}
  i = i + 1;
  }
  return counter;
}
// END

export default countChars;



/* Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен 
в верхний регистр. n – задается на входе в функцию.*/
const makeItFunny = (str, n) => {
  let i = 0;
  let result = "";
  while (i < str.length) {
    if ((i + 1) % n === 0) { result = result + str[i].toUpperCase();}
    else { result = result + str[i];}
  i = i + 1;
  }
  return result;}

// END

export default makeItFunny;