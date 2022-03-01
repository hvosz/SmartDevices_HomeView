import { SmarDeviceDetails, SmartDevice } from "./Interfaces";

export const API_PROTOCOL = "http";
export const API_URL = "127.0.0.1";
export const API_PORT = "5000";
export const BASE_URL = `${API_PROTOCOL}://${API_URL}:${API_PORT}`;

/* 
  For the purpose of presentation, state (both connectionState and isTurnedOn) is
  randomize to show all of the edges of App 
*/

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomizeConnectionState = (): string => {
  const randomNumber = getRandomInt(1, 4);
  switch (randomNumber) {
    case 1:
      return "connected";
    case 2:
      return "poorConnection";
    case 3:
      return "disconnected";
    default:
      return "disconnected";
  }
};

const BulbStatus = randomizeConnectionState();
const TemperatureStatus = randomizeConnectionState();
const OutletStatus = randomizeConnectionState();

/* 
  For purpose of presentation example respone is held in a const.
  Such presented data should be in the same shape as in the given API Endpoint.
*/

export const API_DEVICES: SmartDevice[] = [
  {
    type: "bulb",
    id: "1",
    name: "MyBulb",
    connectionState: BulbStatus,
  },
  {
    type: "outlet",
    id: "2",
    name: "MyOutlet",
    connectionState: OutletStatus,
  },
  {
    type: "temperatureSensor",
    id: "3",
    name: "MyTempSensor",
    connectionState: TemperatureStatus,
  },
];

export const updateDeviceDetails = (
  deviceID: string,
  changedProperty: string
) => {
  console.log(changedProperty);
  const newObject: any = {};
  let newDevices: SmarDeviceDetails[] = DEVICE_DETAILS.map((device) => {
    if (device.id === deviceID) {
      Object.assign(newObject, device);
      newObject[`${changedProperty}`] = !newObject[`${changedProperty}`];
      return newObject;
    }
    return device;
  });
  console.log(DEVICE_DETAILS[Number(deviceID) - 1]);
  // console.log(newDevices[Number(deviceID) - 1]);
  DEVICE_DETAILS = newDevices;
};

export const updateBulbBrightness = (
  deviceID: string,
  newBrightness: number
) => {
  const newObject: any = {};
  let newDevices: SmarDeviceDetails[] = DEVICE_DETAILS.map((device) => {
    if (device.id === deviceID) {
      Object.assign(newObject, device);
      newObject.brightness = newBrightness;
      return newObject;
    }
    return device;
  });
  DEVICE_DETAILS = newDevices;
};

export const updateBulbColor = (deviceID: string, newColor: string) => {
  const newObject: any = {};
  let newDevices: SmarDeviceDetails[] = DEVICE_DETAILS.map((device) => {
    if (device.id === deviceID) {
      Object.assign(newObject, device);
      newObject.color = newColor;
      return newObject;
    }
    return device;
  });

  DEVICE_DETAILS = newDevices;
};

export const getDeviceDetails = () => {
  return DEVICE_DETAILS;
};

export let DEVICE_DETAILS: SmarDeviceDetails[] = [
  {
    type: "bulb",
    id: "1",
    name: "MyBulb",
    connectionState: BulbStatus,
    isTurnedOn: getRandomInt(1, 3) === 1 ? true : false, // Randomize isTurnedON
    brightness: 60, // <0, 100>
    color: "#452332", // in the CSS formats
  },
  {
    type: "outlet",
    id: "2",
    name: "MyOutlet",
    isTurnedOn: getRandomInt(1, 3) === 1 ? true : false, // Randomize isTurnedON
    connectionState: OutletStatus,
    powerConsumption: 80, // in watts
  },
  {
    type: "temperatureSensor",
    id: "3",
    name: "MyTempSensor",
    connectionState: TemperatureStatus,
    temperature: 20,
  },
];
