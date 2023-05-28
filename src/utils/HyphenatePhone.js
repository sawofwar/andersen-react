export const hyphenatePhone = (event, hyphenState) => {
  /* 
    const target = event.target;
    const targetValue = event.target.value; */

  const { target } = event;
  const { value: targetValue } = event.target;

  if (
    (targetValue.at(-1) === "-" && targetValue.length !== 2) ||
    (targetValue.at(-1) === "-" && targetValue.length !== 7) ||
    (targetValue.at(-1) === "-" && targetValue.length !== 10)
  ) {
    const targetValueArray = targetValue.split("");
    targetValueArray.pop();
    target.value = targetValueArray.join("");
  }

  if (
    event.target.value.length === 1 &&
    event.target.value !== "-" &&
    hyphenState === false
  ) {
    target.value = target.value + "-";
  } else if (event.target.value.length === 6 && hyphenState === false) {
    target.value = target.value + "-";
  } else if (event.target.value.length === 9 && hyphenState === false) {
    target.value = target.value + "-";
  }
};

export default hyphenatePhone;
