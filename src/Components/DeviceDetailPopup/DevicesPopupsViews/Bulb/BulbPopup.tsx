//React & React Hooks
import { useContext } from "react";

//Assets
import "./BulbPopup.scss";

//MUI components
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

//Components
import BulbColorChangeButton from "./BulbColorChangeButton";

//Interfaces
import { SmarDeviceDetails } from "../../../../Interfaces";
import { DeviceContext } from "../../../../Contexts/DeviceContext";

// **** API ****
import { updateBulbBrightness, updateBulbColor } from "../../../../API";

interface BulbPopupProps {
  deviceDetails: SmarDeviceDetails;
}

const BulbPopup = (props: BulbPopupProps) => {
  const [DeviceDetails, getDeviceDetails] = useContext(DeviceContext);

  const changeBrightness = (newBrightnesLevel: any) => {
    /* Here we should call the API EndPoint. Imitaiting it with updateBulbBrihtness  */
    updateBulbBrightness(props.deviceDetails.id, newBrightnesLevel);
    getDeviceDetails();
  };

  return (
    <div className="BulbPopup">
      <div className="BulbPopup__inner">
        <div className="BulbPopup__brightnesChange">
          <p>Change brightness</p>
          <Box>
            <Slider
              value={
                DeviceDetails[Number(props.deviceDetails.id) - 1].brightness
              }
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={(_, value) => changeBrightness(value)}
            />
          </Box>
        </div>
        <div className="BulbPopup__colorChange">
          <p>Change color</p>
          <div className="BulbPopup__colorChangeGrid">
            <BulbColorChangeButton
              deviceID={props.deviceDetails.id}
              color="#D46969"
            />
            <BulbColorChangeButton
              deviceID={props.deviceDetails.id}
              color="#687CAF"
            />
            <BulbColorChangeButton
              deviceID={props.deviceDetails.id}
              color="#7B4242"
            />
            <BulbColorChangeButton
              deviceID={props.deviceDetails.id}
              color="#F9F1B1"
            />
            <BulbColorChangeButton
              deviceID={props.deviceDetails.id}
              color="#D6D966"
            />
            <BulbColorChangeButton
              deviceID={props.deviceDetails.id}
              color="#4D5564"
            />
            <BulbColorChangeButton
              deviceID={props.deviceDetails.id}
              color="#EDBD41"
            />
            <BulbColorChangeButton
              deviceID={props.deviceDetails.id}
              color="#B956B5"
            />
            <BulbColorChangeButton
              deviceID={props.deviceDetails.id}
              color="#4EE44B"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulbPopup;
