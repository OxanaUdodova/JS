/* 1) Реализуйте функцию isInternationalPhone(), которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.*/

const isInternationalPhone = (phoneNum) => {
  const firstSign = "+";
  return firstSign === phoneNum[0];
}
// END

export default isInternationalPhone;




// 2) Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным или нет.
const isLeapYear = (year) => (year % 400 === 0) || (year % 4 === 0 && year % 100 != 0);
// END

export default isLeapYear;



/* 3) Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает адрес сайта и возвращает его с https:// в начале.

Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС*/

const normalizeUrl = (url) =>{
  if (url.startsWith("https://"))
  {return url};
  return `https://${url}`;
}
// END

export default normalizeUrl;




/* 4) Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ (по порядковому номеру, а не индексу) и возвращает его наружу. Если такого символа нет, то функция возвращает пустую строку.*/

const getLetter = (name, num) =>{
  return name[num - 1] || "";
  }
// END

export default getLetter;


/* 5) Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null*/
const getNumberExplanation = (getNumber) => {
    let explanation
    switch (getNumber) {
      case 666 :
        explanation = "devil number"
        break;
      case 42 :
        explanation = "answer for everything"
        break;
      case 7:
        explanation = "prime number"
        break;
      default: explanation = null

    }
    return explanation;
}
// END

export default getNumberExplanation;
