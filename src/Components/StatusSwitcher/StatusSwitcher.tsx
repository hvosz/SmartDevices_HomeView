// React & React Hooks
import { useEffect, useState } from "react";
// Assets
import "./StatusSwitcher.scss";

//API
import { updateDeviceDetails } from "./../../API";

interface StatusSwitcherProps {
  deviceId: string;
  isTurunedOn: boolean;
  updateDevice: () => void;
}

const StatusSwitcher = (props: StatusSwitcherProps) => {
  const [isTurnOn, setIsTurnOn] = useState<boolean>(props.isTurunedOn);

  const changeIsTurnedOnStatus = async () => {
    /* 
      To provide status device changing, we shoulde develop some API endpoint.
      Using such endpoint we should make a POST request to change actual state
      of given Device. After request finished we should check the resposne status.
      If the status is 200 (Means that device change his state) we should change our
      local state. From the other hand if status is for example 400 we should handle 
      given error.
    */
    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: "JWT fefege...",
    //   DeviceId: props.deviceId,
    //   DeviceStatus: props.isTurunedOn,
    // };
    // const axios = require("axios");
    // const request = await axios.post(`${BASE_URL}/isTurnedOnChange`, headers);
    // if(request.status === 200){
    //   setIsTurnOn(!isTurnOn)
    // }else{
    //   console.error('Unable to change status')
    // }
    /* 
      For puropose of the presentation we will change our local state on every 
      user request.
    */

    try {
      updateDeviceDetails(props.deviceId, "isTurnedOn");
      props.updateDevice();
    } catch (error: any) {
      return "Something went wrong:" + error;
    }
    setIsTurnOn(!isTurnOn);
  };

  useEffect(() => {
    // console.log(props.isTurunedOn);
    setIsTurnOn(props.isTurunedOn);
  }, [props.isTurunedOn]);

  return (
    <button onClick={changeIsTurnedOnStatus} className="StatusSwitcher">
      <div
        className="StatusSwitcher__inner"
        style={{ backgroundColor: isTurnOn ? "#66c449" : "transparent" }}
      >
        <div
          className="StatusSwitcher__indicator"
          style={{
            left: isTurnOn ? "1.6rem" : "0.25rem",
          }}
        ></div>
      </div>
    </button>
  );
};

export default StatusSwitcher;
