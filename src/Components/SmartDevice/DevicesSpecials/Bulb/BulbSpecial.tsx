// React hooks & Context
import { DeviceContext } from "../../../../Contexts/DeviceContext";
import { useContext } from "react";

//Assets
import "./BulbSpecial.scss";

//Custom components
import StatusSwitcher from "../../../StatusSwitcher/StatusSwitcher";
import BulbImage from "./../../../../Assets/Images/bulb.png";

interface BulbSpecialProps {
  deviceID: string;
  isTurnedOn: boolean;
  connectionState: string;
  brightness: number;
  color: string;
}

const BulbSpecial = (props: BulbSpecialProps) => {
  const [DeviceDetails, getDeviceDetails] = useContext(DeviceContext);
  console.log(DeviceDetails[Number(props.deviceID) - 1]);
  return (
    <div className="BulbSpecial">
      <div className="BulbSpecial_imageHolder">
        <img
          alt="device image"
          src={BulbImage}
          className="BulbSpecial__image"
        />
      </div>
      {props.connectionState !== "disconnected" ? (
        <>
          <p className="SmartDevice__mainInformation">
            {DeviceDetails[Number(props.deviceID) - 1].brightness}%
          </p>
          <StatusSwitcher
            deviceId={props.deviceID}
            isTurunedOn={props.isTurnedOn}
            updateDevice={getDeviceDetails}
          />
        </>
      ) : (
        <p className="TemperatureSpecial__OfflineMode">
          Device is currently <br /> in offline mode
        </p>
      )}
    </div>
  );
};

export default BulbSpecial;
