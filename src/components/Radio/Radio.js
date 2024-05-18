import React from "react";

function Radio({ name = "variant", label, variant, setVariant }) {
  return (
    <label htmlFor={`${name}-${label}`}>
      <input
        id={`${name}-${label}`}
        type="radio"
        name={name}
        value={label}
        checked={variant === label}
        onChange={(event) => setVariant(event.target.value)}
      />
      {label}
    </label>
  );
}

export default Radio;
