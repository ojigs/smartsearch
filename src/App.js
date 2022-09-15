import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List"
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("")
  //We are going to convert input text to lowercase and set the state with setInputText
  const inputHandler = (e) => {
    let lowerCase =  e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  return (
    <div className="main">
      <h1>Smart Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} type="string" />
    </div>
  );
}

export default App;
