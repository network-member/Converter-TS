import React from "react";
import "./style.css";
import { InputProps } from "declaration";

export default function Input({
  name,
  value,
  onChange,
  tag,
}: InputProps): React.ReactElement {
  return (
    <div className="flexBox">
      <input
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        className="text"
        type="text"
      />
      <div>{tag}</div>
    </div>
  );
}
