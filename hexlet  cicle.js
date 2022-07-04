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

