import { useEffect, useState } from "react";

/* 
  useConnectionStateColor return a HEX type color, based on
  API connectionState 
*/

const useConnectionStateColor = (deviceStatus: string | null) => {
  const [innerDeviceStatus, setinnerDeviceStatus] = useState<string | null>(
    deviceStatus
  );
  const [deviceStatusColor, setDeviceStatusColor] = useState<string | null>(
    null
  );

  const getDeviceStatusColor = () => {
    switch (innerDeviceStatus) {
      case "connected":
        return "#52d976";
      case "poorConnection":
        return "#d9b052";
      case "disconnected":
        return "#d95252";
      default:
        return "unset";
    }
  };

  useEffect(() => {
    setDeviceStatusColor(getDeviceStatusColor());
  }, [innerDeviceStatus]);

  return [deviceStatusColor, setinnerDeviceStatus] as const;
};

export default useConnectionStateColor;
