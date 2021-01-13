import React from "react";
import Input from "components/Input";
import { ExchangeRowProps } from "declaration";

export default function ExchangeRow({
  currentValueLeft,
  currentValueRight,
  onChange,
}: ExchangeRowProps): React.ReactElement {
  return (
    <div className="flexRow">
      <Input
        value={currentValueLeft.value}
        tag={currentValueLeft.tag}
        name="left"
        onChange={onChange}
      />
      ==
      <Input
        value={currentValueRight.value}
        tag={currentValueRight.tag}
        name="right"
        onChange={onChange}
      />
    </div>
  );
}
