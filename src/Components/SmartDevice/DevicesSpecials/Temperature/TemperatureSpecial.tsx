//Assetes
import "./TemperatureSpecial.scss";
import TemperatureImage from "./../../../../Assets/Images/temperature.png";

//Custom components
import StatusSwitcher from "../../../StatusSwitcher/StatusSwitcher";

interface TemeratureSpecialProps {
  deviceID: string;
  status: string;
  temperature: number;
}

const TemperatureSpecial = (props: TemeratureSpecialProps) => {
  return (
    <div className="TemperatureSpecial">
      <div className="SmartDevice_imageHolder">
        <img
          alt="device image"
          src={TemperatureImage}
          className="SmartDevice__image"
        />
      </div>
      {props.status !== "disconnected" ? (
        <p className="SmartDevice__mainInformation">{props.temperature}°C</p>
      ) : (
        <p className="TemperatureSpecial__OfflineMode">
          Device is currently <br /> in offline mode
        </p>
      )}
    </div>
  );
};

export default TemperatureSpecial;
