import React from "react";
import { SelectRowProps } from "declaration";
export default function SelectRow({
  allRates,
  onChange,
  leftTag,
  rightTag,
}: SelectRowProps): React.ReactElement {
  const options = Object.keys(allRates).map((current, index) => {
    return (
      <option key={index} value={current}>
        {current}
      </option>
    );
  });
  return (
    <div className="flexRow">
      Вы переводите из
      <select name="left" onChange={(e) => onChange(e)} value={leftTag}>
        {options}
      </select>
      в
      <select name="right" onChange={(e) => onChange(e)} value={rightTag}>
        {options}
      </select>
    </div>
  );
}
