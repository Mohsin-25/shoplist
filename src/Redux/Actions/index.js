export const addShop = ({ name, area, category, openingDate, closingDate }) => {
  return {
    type: "ADD_SHOP",
    payload: {
      id: new Date().getTime().toString(),
      // data: name, area, category, openingDate, closingDate,
      name: name,
      area: area,
      category: category,
      openingDate: openingDate,
      closingDate: closingDate,
    },
  };
};

export const removeShop = (id) => {
  return {
    type: "REMOVE_SHOP",
    id: id,
  };
};
