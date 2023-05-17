import React from "react";

type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
};
function Input({ onChange, name, placeholder, value = "" }: Props) {
  return (
    <input className="font-black border-slate-950"
      onChange={event => onChange(event.target.value)}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default Input;