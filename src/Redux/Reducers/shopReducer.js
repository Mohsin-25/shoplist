const initialState = {
  list: [
    {
      id: new Date().getTime() + 1,

      name: "Royal kirana",
      area: "Mumbai",
      category: "Grocery",
      openingDate: "2022-12-01",
      closingDate: "2022-12-03",
    },
    {
      id: new Date().getTime() + 7,

      name: "Manoj bakery",
      area: "Pune",
      category: "Baker",
      openingDate: "2022-12-06",
      closingDate: "2022-12-07",
    },
    {
      id: new Date().getTime() + 2,

      name: "Cake studio",
      area: "Nagpur",
      category: "Baker",
      openingDate: "2022-12-06",
      closingDate: "2022-12-07",
    },
    {
      id: new Date().getTime() + 3,

      name: "Anup Medicals",
      area: "Nagpur",
      category: "Chemist",
      openingDate: "2022-12-01",
      closingDate: "2022-12-06",
    },
    {
      id: new Date().getTime() + 4,

      name: "Navneet Book-depot",
      area: "Nashik",
      category: "Stationery",
      openingDate: "2022-12-06",
      closingDate: "2022-12-07",
    },
    {
      id: new Date().getTime() + 5,

      name: "Zee mart",
      area: "Pune",
      category: "Grocery",
      openingDate: "2022-11-28",
      closingDate: "2022-12-06",
    },

    {
      id: new Date().getTime() + 6,

      name: "Oswal Papers",
      area: "Mumbai",
      category: "Stationery",
      openingDate: "2022-12-06",
      closingDate: "2022-12-07",
    },
    {
      id: new Date().getTime() + 8,

      name: "Khan Medicals",
      area: "Mumbai",
      category: "Chemist",
      openingDate: "2022-11-27",
      closingDate: "2022-12-05",
    },
  ],
};
export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHOP":
      const { id, name, area, category, openingDate, closingDate } =
        action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            name: name,
            area: area,
            category: category,
            openingDate: openingDate,
            closingDate: closingDate,
          },
        ],
      };
    case "REMOVE_SHOP":
      const newList = state.list.filter((element) => element.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};
