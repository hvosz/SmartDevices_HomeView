//React & React Hooks
import { useContext } from "react";

//Assets
import "./BulbPopup.scss";

//Context
import { DeviceContext } from "../../../../Contexts/DeviceContext";

// **** API ****
import { updateBulbColor } from "../../../../API";

interface BulbColorChangeButtonProps {
  deviceID: string;
  color: string;
}

const BulbColorChangeButton = (props: BulbColorChangeButtonProps) => {
  const [DeviceDetails, getDeviceDetails] = useContext(DeviceContext);

  const currentChosenColor = DeviceDetails[Number(props.deviceID) - 1].color;

  const changeColor = () => {
    /* Here we should call the API EndPoint. Imitaiting it with updateBulbColor  */
    updateBulbColor(props.deviceID, props.color);
    getDeviceDetails();
  };

  return (
    <button
      className="BulbPopup__color"
      style={{
        backgroundColor: props.color,
        border: currentChosenColor === props.color ? "solid green 5px" : "",
      }}
      onClick={changeColor}
    ></button>
  );
};

export default BulbColorChangeButton;
