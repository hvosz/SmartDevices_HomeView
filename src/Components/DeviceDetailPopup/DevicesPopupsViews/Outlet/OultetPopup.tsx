//Interfaces
import { SmarDeviceDetails } from "../../../../Interfaces";

//Assets
import "./OutletPopup.scss";

interface OutletPopupProps {
  deviceDetails: SmarDeviceDetails;
}

const OutletPopup = (props: OutletPopupProps) => {
  return (
    <div className="OutletPopup">
      <div className="OutletPopup__inner">
        <h2 className="OutletPopup__powerConsumption">
          {props.deviceDetails.powerConsumption}W
        </h2>
        <button className="Outletpopup__refreshButton">Refresh</button>
      </div>
    </div>
  );
};

export default OutletPopup;
