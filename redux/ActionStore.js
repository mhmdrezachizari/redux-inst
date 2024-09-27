export const buyphone = (name, price) => {
  return {
    type: "BUY_PHONE",
    name: name,
    price: price,
  };
};
