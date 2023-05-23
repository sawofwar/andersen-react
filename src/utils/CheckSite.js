export function checkSite(str) {
  if (str === "") return "empty";

  const regex = /^(?:https:\/\/)/;
  return regex.test(str);
}
