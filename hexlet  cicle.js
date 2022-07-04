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


