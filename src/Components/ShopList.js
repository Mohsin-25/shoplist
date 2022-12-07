import React, { useEffect, useState } from "react";
import "./ShopList.css";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeShop } from "../Redux/Actions";
import FilterShopList from "./FilterShopList";

export default function ShopList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.shopReducer.list);
  const [items, setItems] = useState(list);

  useEffect(() => {
    setItems(list);
    console.log("List", list);
    console.log("Items", items);
  }, [list]);

  const allAreas = [
    ...new Set(
      list.map((currElem) => {
        return currElem.area;
      })
    ),
  ];
  //   console.log("area", allAreas);

  const allCategories = [
    ...new Set(
      list.map((currElem) => {
        return currElem.category;
      })
    ),
  ];
  //   console.log("categories", allCategories);

  const filterArea = (areaItem) => {
    // console.log(areaItem);
    const updatedItem = list.filter((currElem) => {
      //   console.log(currElem.area);
      return currElem.area === areaItem;
    });
    setItems(updatedItem);
  };

  const filterCategory = (categoryItem) => {
    // console.log(categoryItem);
    const updatedItem = list.filter((currElem) => {
      // console.log(currElem.category);
      return currElem.category === categoryItem;
    });
    setItems(updatedItem);
  };

  const today = Number(
    new Date().toISOString().replace(/T.*/, "").replaceAll(/-/gi, "")
  );
  console.log(today);

  return (
    <div className="shopList">
      <div className="row">
        <div className="shopList-list">
          {items?.map((element, index) => {
            return (
              <div key={index} className="shopList-element">
                <h4>
                  {element?.name[0]?.toUpperCase() + element?.name?.slice(1)},
                  <small>
                    <small>{element.area}</small>
                  </small>
                </h4>
                <small></small>
                <p>({element.category})</p>
                {Number(element.openingDate.replaceAll(/-/gi, "")) <= today &&
                today <= Number(element.closingDate.replaceAll(/-/gi, "")) ? (
                  <p>(OPEN)</p>
                ) : (
                  <p>(CLOSED)</p>
                )}
                <DeleteIcon
                  className="deleteIcon"
                  onClick={() => dispatch(removeShop(element.id))}
                ></DeleteIcon>
              </div>
            );
          })}
        </div>
        <FilterShopList
          setItems={setItems}
          list={list}
          allAreas={allAreas}
          allCategories={allCategories}
          filterArea={filterArea}
          filterCategory={filterCategory}
        ></FilterShopList>
      </div>
    </div>
  );
}

//   const uniqueData = (data, property) => {
//     let newVal = data.map((currentItem) => {
//       return currentItem[property];
//     });
//     console.log(newVal);
//   };
//   const categoryData = uniqueData(list, "area");
//   console.log(categoryData);
