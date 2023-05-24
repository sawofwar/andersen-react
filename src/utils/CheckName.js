export function startsWithCapital(str) {
  if (str === "") return "empty";

  const regex = /^[A-Z|А-Я]/;
  const symbolRegex = /[0-9.?*\-_~`!@#$%^&()+={}[\]|/:;"'<>,.?]/g;
  console.log(str.match(symbolRegex));

  if (str.match(symbolRegex)?.length === 0 || str.match(symbolRegex) === null)
    return regex.test(str);
}
