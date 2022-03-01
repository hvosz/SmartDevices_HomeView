//React & React Hooks & Context
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { DeviceContext } from "../../Contexts/DeviceContext";

//Custom components
import DeviceStatusIndicator from "../DeviceStatus/DeviceStatusIndicator";
import OutletPopup from "./DevicesPopupsViews/Outlet/OultetPopup";
import TemperatureSensorPopup from "./DevicesPopupsViews/Temperature/TemperaturePopup";
import StatusSwitcher from "../StatusSwitcher/StatusSwitcher";

//interact.js
import "@interactjs/auto-start";
import "@interactjs/actions/drag";
import "@interactjs/actions/resize";
import "@interactjs/modifiers";
import "@interactjs/dev-tools";
import interact from "interactjs";

//Assets
import "./DeviceDetailPopup.scss";

//Interfaces
import { SmarDeviceDetails } from "../../Interfaces";
import BulbPopup from "./DevicesPopupsViews/Bulb/BulbPopup";

interface DeviceDetailPopupProps {
  deviceID: string | null;
  setChoosenDeviceID: Dispatch<SetStateAction<string | null>>;
}

const DeviceDetailPopup = (props: DeviceDetailPopupProps) => {
  const [deviceDetails, setDeviceDetails] = useState<SmarDeviceDetails>();
  const [DeviceDetails, getDeviceDetails] = useContext(DeviceContext);

  useEffect(() => {
    setDeviceDetails(DeviceDetails[Number(props.deviceID) - 1]);
  }, [props.deviceID]);

  useEffect(() => {
    setDeviceDetails(DeviceDetails[Number(props.deviceID) - 1]);
  }, [DeviceDetails]);

  useEffect(() => {
    interact(".DeviceDetailPopup").resizable({
      edges: { top: true, left: true, bottom: true, right: true },
      invert: "reposition",
      listeners: {
        move: function (event) {
          let { x, y } = event.target.dataset;

          x = (parseFloat(x) || 0) + event.deltaRect.left;
          y = (parseFloat(y) || 0) + event.deltaRect.top;

          Object.assign(event.target.style, {
            width: `${event.rect.width}px`,
            height: `${event.rect.height}px`,
            transform: `translate(${x}px, ${y}px)`,
          });

          Object.assign(event.target.dataset, { x, y });
        },
      },
      modifiers: [
        interact.modifiers.restrictSize({
          min: { width: 100, height: 270 },
          max: { width: 500, height: 500 },
        }),
      ],
    });

    // target elements with the "draggable" class
    interact(".DeviceDetailPopup").draggable({
      // enable inertial throwing
      inertia: false,
      // keep the element within the area of it's parent
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
          endOnly: true,
        }),
      ],
      // enable autoScroll
      autoScroll: false,

      listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,
      },
    });

    function dragMoveListener(event: any) {
      var target = event.target;
      // keep the dragged position in the data-x/data-y attributes
      var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      // translate the element
      target.style.transform = "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    }

    // this function is used later in the resizing and gesture demos
    (window as any).dragMoveListener = dragMoveListener;
  });

  const rednerDevicePopup = () => {
    if (deviceDetails) {
      switch (deviceDetails.type) {
        case "outlet":
          return <OutletPopup deviceDetails={deviceDetails} />;
        case "temperatureSensor":
          return <TemperatureSensorPopup deviceDetails={deviceDetails} />;
        case "bulb":
          return <BulbPopup deviceDetails={deviceDetails} />;
      }
    }
    return <></>;
  };

  return (
    <div className="DeviceDetailPopup">
      {deviceDetails && deviceDetails.connectionState !== "disconnected" ? (
        <>
          <div className="DeviceDetailPopup__header">
            <DeviceStatusIndicator deviceStatus={"connected"} />
            <h2 className="DeviceDetailPopup_deviceName">
              {deviceDetails?.name}
            </h2>
            {deviceDetails.isTurnedOn !== undefined && (
              <StatusSwitcher
                deviceId={deviceDetails?.id}
                isTurunedOn={deviceDetails?.isTurnedOn}
                updateDevice={getDeviceDetails}
              />
            )}
            <button
              className="DeviceDetailPopup__closeButton"
              onClick={() => props.setChoosenDeviceID(null)}
            >
              X
            </button>
          </div>
          {rednerDevicePopup()}
        </>
      ) : (
        <div className="error_message">
          Sorry device is currently in offline mode
        </div>
      )}
    </div>
  );
};

export default DeviceDetailPopup;
