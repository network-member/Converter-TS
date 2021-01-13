import {
  ChangeInputFunc,
  ChangeListFunc,
  CalculatingFunc,
  AllRates,
  Currencies,
  DigitCheckingFunc,
} from "declaration";

export const digitChecking: DigitCheckingFunc = function (value) {
  const rep = /(\d+|\.)$/;
  return rep.test(value) || value === "" ? value : null;
};

export const changeInputHelper: ChangeInputFunc = function (
  firstCurrentValue,
  secondCurrentValue,
  targetValue
) {
  firstCurrentValue.value = сalculating(
    Number(targetValue),
    secondCurrentValue.rate,
    firstCurrentValue.rate
  );
  secondCurrentValue.value = targetValue;
};

export const changeListHelper: ChangeListFunc = function (
  сurrentValue,
  currentRate,
  targetValue,
  addition
) {
  сurrentValue.tag = targetValue;
  сurrentValue.rate = currentRate;
  сurrentValue.value =
    typeof addition !== "undefined"
      ? сalculating(Number(addition.value), addition.rate, currentRate)
      : сurrentValue.value;
};

export const сalculating: CalculatingFunc = function (first, second, third) {
  const calculatedValue = (first * second) / third;
  return Number(calculatedValue.toFixed(3));
};

export const getRates = async (): Promise<AllRates> => {
  const response = await (
    await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
  ).json();
  const [currencies, rates]: [Currencies, AllRates] = [
    response.Valute,
    { RUB: 1 },
  ];
  Object.values(currencies).forEach((item) => {
    rates[item.CharCode] = item.Value / item.Nominal;
  });
  return rates;
};
