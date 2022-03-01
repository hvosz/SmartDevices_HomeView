// React hooks
import { createContext, useEffect, useState } from "react";

// API
import { API_DEVICES, DEVICE_DETAILS } from "../API";

export const DeviceContext = createContext<any>({});

const DeviceContextProvider = (props: any) => {
  const [fetchedDevices, setFetchedDevices] = useState({});
  const [fetchedDevicesWithDetails, setFetchedDevicesWithDetails] = useState(
    {}
  );

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
    setFetchedDevices(API_DEVICES);
  };

  const getDeviceDetails = () => {
    /* 
      When the API endpoint will be finshied, we should fetch details about the device
      from the server using belowed axios request. For the purpose of presentation for now 
      we are using data from API example respone. 
    */

    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: "JWT fefege...",
    //   DeviceId: props.deviceId,
    // };
    // const axios = require("axios");
    // const request = await axios.get(`${BASE_URL}/api/v1/devices/${deviceId}`, headers);
    // if(request.status === 200){
    //   setDeviceDetails(request.data)
    // }else{
    //   console.error('Unable to change status')
    // }

    /* For now we alway set the data from saved example response */
    // console.log("Refresh available devices...");
    setFetchedDevicesWithDetails(DEVICE_DETAILS);
  };

  const wsRefreshDevices = () => {
    // const ws = new WebSocket(`ws://${API_URL}/api/v1/refresh`);
    // const apiCall = {
    //   event: "bts:subscribe",
    //   data: { channel: "order_book_btcusd" },
    // };
    // ws.onopen = (event) => {
    //   ws.send(JSON.stringify(apiCall));
    // };
    // ws.onmessage = function (event) {
    //   const json = JSON.parse(event.data);
    //   console.log(json);
    // };
  };

  useEffect(() => {
    getDeviceDetails();
    console.log("Update DEVICE_DETAILS...");
  }, [DEVICE_DETAILS]);

  return (
    <DeviceContext.Provider
      value={[fetchedDevicesWithDetails, getDeviceDetails]}
    >
      {props.children}
    </DeviceContext.Provider>
  );
};

export default DeviceContextProvider;
