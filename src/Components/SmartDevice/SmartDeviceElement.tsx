//React & React Hooks
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

//Assets
import "./SmartDevice.scss";
import FavoriteImage from "./../../Assets/Images/star.png";

// Custom components
import BulbSpecial from "./DevicesSpecials/Bulb/BulbSpecial";
import OutletSpecial from "./DevicesSpecials/Outlet/OutletSpecial";
import TemeratureSpecial from "./DevicesSpecials/Temperature/TemperatureSpecial";
import DeviceStatusIndicator from "../DeviceStatus/DeviceStatusIndicator";

//Interfaces
import { SmarDeviceDetails, SmartDevice } from "../../Interfaces";

//Example API RESPONE
import { DeviceContext } from "../../Contexts/DeviceContext";

interface SmartDeviceProps {
  deviceDetails: SmartDevice;
  setChoosenDeviceID: Dispatch<SetStateAction<string | null>>;
}

const SmartDeviceElement = (props: SmartDeviceProps) => {
  const [deviceDetail, setDeviceDetails] = useState<null | SmarDeviceDetails>(
    null
  );
  const [DeviceDetails, getDeviceDetails] = useContext(DeviceContext);

  useEffect(() => {
    setDeviceDetails(DeviceDetails[Number(props.deviceDetails.id) - 1]);
  });

  const getDeviceSpecial = (deviceType: string | undefined): JSX.Element => {
    // Function return JSX Element which is a component for holding special devices features.

    /* 
      TODO: Empty elements should be change with some type of error component. 
      Such element should return the information for the user to for example
      restart the device.
    */
    switch (deviceType) {
      case "bulb":
        if (
          undefined !== deviceDetail?.brightness &&
          undefined !== deviceDetail.color &&
          undefined !== deviceDetail.isTurnedOn
        )
          return (
            <BulbSpecial
              deviceID={deviceDetail.id}
              isTurnedOn={deviceDetail.isTurnedOn}
              connectionState={deviceDetail.connectionState}
              brightness={deviceDetail?.brightness}
              color={deviceDetail.color}
            />
          );
        return <></>;
      case "outlet":
        if (
          undefined !== deviceDetail?.powerConsumption &&
          undefined !== deviceDetail.isTurnedOn
        )
          return (
            <OutletSpecial
              deviceID={deviceDetail.id}
              isTurnedOn={deviceDetail.isTurnedOn}
              connectionState={deviceDetail.connectionState}
              powerConsumption={deviceDetail?.powerConsumption}
            />
          );
        return <></>;
      case "temperatureSensor":
        if (undefined !== deviceDetail?.temperature)
          return (
            <TemeratureSpecial
              deviceID={deviceDetail.id}
              status={deviceDetail.connectionState}
              temperature={deviceDetail?.temperature}
            />
          );
        return <></>;
      default:
        return <></>;
    }
  };

  return (
    <>
      {deviceDetail ? (
        <div
          className="SmartDevice"
          onClick={() => props.setChoosenDeviceID(deviceDetail.id)}
        >
          <div className="SmartDevice__header">
            <div className="SmartDevice__favoriteButtonHolder">
              <img
                alt="is device favorite"
                src={FavoriteImage}
                className="SmartDevice__favoriteImage"
              />
            </div>
            <DeviceStatusIndicator
              deviceStatus={deviceDetail?.connectionState}
            />
          </div>
          <h3 className="SmartDevice_deviceName">{deviceDetail?.name}</h3>
          {getDeviceSpecial(deviceDetail?.type)}
          <p className="SmartDevice__deviceType">{deviceDetail?.type}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default SmartDeviceElement;
