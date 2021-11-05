import { ChangeEvent } from "react";

type TextfieldProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Textfield = ({ value, onChange }: TextfieldProps) => (
  <input
    required
    autoFocus
    type="text"
    value={value}
    onChange={onChange}
    className="w-1/2 p-2 border border-black rounded focus:outline-none"
  />
);

export default Textfield;
