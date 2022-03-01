//React & React Hooks
import { useEffect, useState } from "react";
//Assets
import "./DevicesHolder.scss";

//Custom componenst
import SmartDeviceElement from "../SmartDevice/SmartDeviceElement";

//Example API response
import { API_DEVICES } from "../../API";

//Interfaces
import { SmartDevice } from "./../../Interfaces";

interface DeviceHolderProps {
  choosenDeviceID: string | null;
  setChoosenDeviceID: React.Dispatch<React.SetStateAction<string | null>>;
}

const DevicesHolder = (props: DeviceHolderProps) => {
  const [availableDevices, setAvailableDevices] = useState<
    SmartDevice[] | null
  >(null);

  const getAvailableDevices = () => {
    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: "JWT fefege...",
    // };
    // const axios = require("axios");
    // const request = await axios.get(`${BASE_URL}/api/v1/devices`, headers);
    // if(request.status === 200){
    //   setAvailableDevices(request.data)
    // }else{
    //   console.error('Unable to change status')
    // }

    /* 
      For purpouse of presentation this function always setAvailableDevices 
      to example response.
    */
    // console.log("Refresh available devices...");
    setAvailableDevices(API_DEVICES);
  };

  useEffect(() => {
    getAvailableDevices();
    const updateDevices = setInterval(getAvailableDevices, 5000);

    return () => clearInterval(updateDevices);
  }, []);

  useEffect(() => {}, [props.choosenDeviceID]);

  return (
    <div className="DevicesHolder">
      <div className="DevicesHolder__innerHolder">
        {availableDevices &&
          availableDevices.map((smartDevice: any) => {
            return (
              <SmartDeviceElement
                key={smartDevice.id}
                deviceDetails={smartDevice}
                setChoosenDeviceID={props.setChoosenDeviceID}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DevicesHolder;
