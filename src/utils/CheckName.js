export function startsWithCapital(str) {
  const regex = /^[A-ЯA-Z]/;
  return regex.test(str);
}
