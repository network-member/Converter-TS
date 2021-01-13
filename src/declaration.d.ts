/// <reference types="react-scripts" />

interface CurrentValuePart {
  tag: string;
  value: number | string;
}

export interface CurrentValue extends CurrentValuePart {
  rate: number;
}

export type ChangeInputFunc = (
  firstCurrentValue: CurrentValue,
  secondCurrentValue: CurrentValue,
  targetValue: string
) => void;

export type ChangeListFunc = (
  currentValue: CurrentValue,
  currentRate: number,
  targetValue: string,
  addition?: CurrentValue
) => void;

export type CalculatingFunc = (
  first: number,
  second: number,
  third: number
) => number;

export type SetStateHelperFunc = (
  rightValue: CurrentValue,
  leftValue: CurrentValue
) => void;

export type DigitCheckingFunc = (value: string) => void;

export interface AllRates {
  [key: string]: number;
}

export interface Currencies {
  [key: string]: { CharCode: string; Nominal: number; Value: number };
}

interface OnChangeProp {
  onChange: Function;
}

export interface SelectRowProps extends OnChangeProp {
  allRates: AllRates;
  leftTag: string;
  rightTag: string;
}

export interface ExchangeRowProps extends OnChangeProp {
  currentValueLeft: CurrentValue;
  currentValueRight: CurrentValue;
}

export interface InputProps extends CurrentValuePart, OnChangeProp {
  name: string;
}
