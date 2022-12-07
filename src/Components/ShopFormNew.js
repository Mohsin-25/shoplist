import React, { useState } from "react";
import "./ShopForm.css";
import { useDispatch } from "react-redux";
import { addShop } from "../Redux/Actions";

export default function ShopFormNew({ showForm, setShowForm, blur, setBlur }) {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [closingDate, setClosingDate] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      area !== "" &&
      category !== "" &&
      openingDate !== "" &&
      closingDate !== "" &&
      Number(closingDate.replaceAll(/-/gi, "")) >=
        Number(openingDate.replaceAll(/-/gi, ""))
    ) {
      dispatch(addShop({ name, area, category, openingDate, closingDate }));
      setName("");
      setArea("");
      setCategory("");
      setOpeningDate("");
      setClosingDate("");
      setShowForm(!showForm);
      setBlur(!blur);
    }
    if (
      Number(closingDate.replaceAll(/-/gi, "")) <
      Number(openingDate.replaceAll(/-/gi, ""))
    ) {
      alert("Closing date should be after Opening date");
    }
  };

  //   console.log("close", closingDate.replace(/-/gi, ""));
  //   console.log("open", openingDate.replace(/-/gi, ""));

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-data-div">
          {/* <h1 className="heading">New Shop</h1> */}
          <label>Shop Name:</label>
          <input
            type="text"
            name="name"
            pattern="[A-Za-z]+"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />

          <label>Area</label>
          <select
            name="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          >
            <option value="" disabled selected hidden>
              Select Area
            </option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nashik">Nashik</option>
            <option value="Nagpur">Nagpur</option>
          </select>
          <br />

          <label>Category</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled selected hidden>
              Select Category
            </option>

            <option value="Grocery">Grocery</option>
            <option value="Stationery">Stationery</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
          </select>
          <br />

          <label>Opening date: </label>
          <input
            type="date"
            name="openingDate"
            required
            value={openingDate}
            onChange={(e) => setOpeningDate(e.target.value)}
          />
          <br />

          <label>Closing date: </label>
          <input
            type="date"
            name="closingDate"
            required
            value={closingDate}
            onChange={(e) => setClosingDate(e.target.value)}
          />
          <br />

          <input
            type="submit"
            value="Add Shop"
            className="submitBtn"
          />
        </div>
      </form>
    </div>
  );
}
