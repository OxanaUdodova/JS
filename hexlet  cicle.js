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
