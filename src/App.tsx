import React from "react";
import logo from "./logo.svg";
import "./App.scss";

// Custom components
import Navbar from "./Components/Navbar/Navbar";
import RoomPicker from "./Components/RoomPicker/RoomPicker";
import DevicesHolder from "./Components/DevicesHolder/DevicesHolder";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoomPicker />
      <DevicesHolder />
    </div>
  );
}

export default App;
