import React, { useState, useEffect } from "react";
import "./App.css";
import {
  digitChecking,
  changeInputHelper,
  changeListHelper,
  сalculating,
  getRates,
} from "utils";
import ExchangeRow from "components/ExchangeRow";
import SelectRow from "components/SelectRow";
import { CurrentValue, AllRates, SetStateHelperFunc } from "declaration";

export default function App(): React.ReactElement {
  const [currentValueLeft, setLeftValue] = useState<CurrentValue>({
    tag: "USD",
    value: "",
    rate: 1,
  });

  const [currentValueRight, setRightValue] = useState<CurrentValue>({
    tag: "RUB",
    value: "",
    rate: 1,
  });

  const [allRates, setRates] = useState<AllRates>({});

  useEffect(() => {
    getRates().then((result) => {
      setRates(result);
      setLeftValue((currentValueLeft) => ({
        ...currentValueLeft,
        rate: result["USD"],
      }));
    });
  }, []);

  const handleChangelist = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const leftValue = { ...currentValueLeft };
    const rightValue = { ...currentValueRight };
    const {
      target: { value: targetValue, name },
    } = e;
    const currentRate = allRates[e.target.value];
    if (name === "left") {
      rightValue.value = сalculating(
        Number(leftValue.value),
        currentRate,
        rightValue.rate
      );
      changeListHelper(leftValue, currentRate, targetValue);
    } else changeListHelper(rightValue, currentRate, targetValue, leftValue);
    setStateHelper(rightValue, leftValue);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: targetValue, name },
    } = e;
    if (digitChecking(targetValue) !== null) {
      const leftValue = { ...currentValueLeft };
      const rightValue = { ...currentValueRight };
      if (name === "left")
        changeInputHelper(rightValue, leftValue, targetValue);
      else changeInputHelper(leftValue, rightValue, targetValue);
      setStateHelper(rightValue, leftValue);
    }
  };

  const setStateHelper: SetStateHelperFunc = (rightValue, leftValue) => {
    setLeftValue(leftValue);
    setRightValue(rightValue);
  };

  return (
    <div className="mainBoard">
      <div>
        <h3>Конвертер Валют</h3>
        <SelectRow
          allRates={allRates}
          onChange={handleChangelist}
          leftTag={currentValueLeft.tag}
          rightTag={currentValueRight.tag}
        />
        <ExchangeRow
          currentValueLeft={currentValueLeft}
          currentValueRight={currentValueRight}
          onChange={handleChangeInput}
        />
        <div className="flexRow">
          <a
            href="#"
            onClick={() => setStateHelper(currentValueLeft, currentValueRight)}
          >
            Поменять местами
          </a>
        </div>
      </div>
    </div>
  );
}
