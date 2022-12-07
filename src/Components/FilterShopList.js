import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function FilterShopList({
  list,
  setItems,
  allAreas,
  allCategories,
  filterArea,
  filterCategory,
}) {
  const [filter, setFilter] = useState(false);
  const [filterByArea, setFilterByArea] = useState(false);
  const [filterByCategory, setFilterByCategory] = useState(false);
  return (
    <div className="filterShopList">
      <button onClick={() => setFilter(!filter)}>
        <FilterAltIcon></FilterAltIcon>Filter
      </button>

      {filter && (
        <div>
          <div>
            <input
              type="radio"
              name="filter"
              //   defaultChecked="checked"
              onClick={() => setItems(list)}
            />
            <label>All</label>
          </div>
          <div className="filter-div">
            <div>
              <button
                onClick={() => {
                  setFilterByArea(!filterByArea);
                  setFilterByCategory(false);
                }}
              >
                Area
              </button>
              {list.length === 0 && <h5>(List empty)</h5>}
              {filterByArea && (
                <>
                  {allAreas.map((area, index) => {
                    return (
                      <div key={index}>
                        <input
                          type="radio"
                          onClick={() => filterArea(area)}
                          value={area}
                          name="filter"
                        />
                        <label>{area}</label>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            <div>
              <button
                onClick={() => {
                  setFilterByCategory(!filterByCategory);
                  setFilterByArea(false);
                }}
              >
                Category
              </button>
              {list.length === 0 && <h5>(List empty)</h5>}
              {filterByCategory && (
                <>
                  {allCategories.map((category, index) => {
                    return (
                      <div key={index}>
                        <input
                          type="radio"
                          onClick={() => filterCategory(category)}
                          value={category}
                          name="filter"
                        />
                        <label>{category}</label>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
