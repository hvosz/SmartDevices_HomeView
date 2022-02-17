import React, { useRef, useState } from "react";
import "./DevicesHolder.scss";

import SmartDevice from "../SmartDevice/SmartDevice";

const DevicesHolder = () => {
  return (
    <div className="DevicesHolder">
      <div className="DevicesHolder__innerHolder">
        <SmartDevice />
        <SmartDevice />
        <SmartDevice />
      </div>
    </div>
  );
};

export default DevicesHolder;
