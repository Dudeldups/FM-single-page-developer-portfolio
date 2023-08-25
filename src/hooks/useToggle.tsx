import { useState } from "react";

export default function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue() {
    setValue(currentValue => !currentValue);
  }

  return [value, toggleValue];
}
