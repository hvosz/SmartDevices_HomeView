//Interfaces
import { SmarDeviceDetails } from "../../../../Interfaces";

//Assets
import "./TemperaturePopup.scss";

interface TemperaturePopupProps {
  deviceDetails: SmarDeviceDetails;
}

const TemperaturePopup = (props: TemperaturePopupProps) => {
  return (
    <div className="OutletPopup">
      <div className="OutletPopup__inner">
        <h2 className="OutletPopup__powerConsumption">
          {props.deviceDetails.temperature}°C
        </h2>
        <button className="Outletpopup__refreshButton">Refresh</button>
      </div>
    </div>
  );
};

export default TemperaturePopup;
