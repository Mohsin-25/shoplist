import "./App.css";
import ShopFormNew from "./Components/ShopFormNew";
import ShopList from "./Components/ShopList";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [blur, setBlur] = useState(false);

  return (
    <div className="App">
      <h1 className="heading">Shop List</h1>
      <div className="container">
        <AddIcon
          sx={{ fontSize: 35 }}
          onClick={() => {
            setShowForm(!showForm);
            setBlur(!blur);
          }}
          className="formBtn"
        ></AddIcon>
        {showForm && (
          <ShopFormNew
            showForm={showForm}
            setShowForm={setShowForm}
            blur={blur}
            setBlur={setBlur}
          ></ShopFormNew>
        )}
        <ShopList></ShopList>
      </div>
      {blur && <div className="blur"></div>}
    </div>
  );
}

export default App;
