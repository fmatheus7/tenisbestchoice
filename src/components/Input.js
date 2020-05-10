/* eslint react/prop-types: 0 */
import React, { useContext } from "react";
import { Context } from "../Context";

export default function Input({
  type,
  alt,
  checked,
  maxlength,
  placeholder,
  value,
  min,
  max,
  name,
}) {
  const { handleChange } = useContext(Context);

  return (
    <input
      type={type}
      alt={alt}
      check={checked}
      maxLength={maxlength}
      placeholder={placeholder}
      value={value}
      min={min}
      max={max}
      name={name}
      onChange={handleChange}
    />
  );
}
