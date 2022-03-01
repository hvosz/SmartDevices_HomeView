import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import DeviceContext from "./Contexts/DeviceContext";

// Custom components
import Navbar from "./Components/Navbar/Navbar";
import RoomPicker from "./Components/RoomPicker/RoomPicker";
import DevicesHolder from "./Components/DevicesHolder/DevicesHolder";
import DeviceDetailPopup from "./Components/DeviceDetailPopup/DeviceDetailPopup";

function App() {
  const [choosenDeviceID, setChoosenDeviceID] = useState<string | null>(null);

  return (
    <div className="App">
      <Navbar />
      <RoomPicker />
      <DeviceContext>
        <DevicesHolder
          choosenDeviceID={choosenDeviceID}
          setChoosenDeviceID={setChoosenDeviceID}
        />
        {choosenDeviceID && (
          <DeviceDetailPopup
            setChoosenDeviceID={setChoosenDeviceID}
            deviceID={choosenDeviceID}
          />
        )}
      </DeviceContext>
    </div>
  );
}

export default App;
