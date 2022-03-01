//Custom hooks
import useConnectionStateColor from "../../Hooks/useConnectionStateColor";

//Assets
import "./DeviceStatusIndicator.scss";

interface DeviceStatusIndicator {
  deviceStatus: string | null;
}

const DeviceStatusIndicator = (props: DeviceStatusIndicator) => {
  const [connectionStateColor, setConnectionStateColor] =
    useConnectionStateColor(props.deviceStatus);

  return (
    <div className="DeviceStatusIndicator">
      <div
        className="DeviceStatusIndicator__inner"
        style={{
          backgroundColor: connectionStateColor ? connectionStateColor : "",
        }}
      ></div>
    </div>
  );
};

export default DeviceStatusIndicator;
