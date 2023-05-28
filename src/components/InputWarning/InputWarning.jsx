import { forwardRef } from "react";

const InputWarning = forwardRef((props, warningRef) => {
  return (
    <p className="input-warning" ref={warningRef}>
      Начинается с https://
    </p>
  );
});

InputWarning.displayName = "InputWarning";

export default InputWarning;
