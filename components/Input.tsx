import React from "react";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({ value, onChange }: Props) {
  return <input value={value} onChange={onChange} />;
}

export default Input;
