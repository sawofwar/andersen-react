const checkPhone = (str) => {
  if (str === "") return "empty";

  const regex = /\d-\d{4}-\d{2}-\d{2}/;
  return regex.test(str);
};

export default checkPhone;
