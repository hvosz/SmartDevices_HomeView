//Context & React hooks
import { useContext } from "react";
import { DeviceContext } from "../../../../Contexts/DeviceContext";

//Assets
import "./OutletSpecial.scss";

//Custom components
import StatusSwitcher from "../../../StatusSwitcher/StatusSwitcher";
import OutletImage from "./../../../../Assets/Images/socket.png";

interface OutletSpecialProps {
  deviceID: string;
  isTurnedOn: boolean;
  connectionState: string;
  powerConsumption: number;
}

const OutletSpecial = (props: OutletSpecialProps) => {
  const [DeviceDetails, getDeviceDetails] = useContext(DeviceContext);
  return (
    <div className="OutletSpecial">
      <div className="SmartDevice_imageHolder">
        <img
          alt="device image"
          src={OutletImage}
          className="SmartDevice__image"
        />
      </div>
      {props.connectionState !== "disconnected" ? (
        <>
          <p className="SmartDevice__mainInformation">
            {props.powerConsumption}W
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

export default OutletSpecial;
