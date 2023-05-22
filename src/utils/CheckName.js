export function startsWithCapital(str) {
  if (str === "") return "empty";

  const regex = /^[A-Z|А-Я]/;
  return regex.test(str);
}
