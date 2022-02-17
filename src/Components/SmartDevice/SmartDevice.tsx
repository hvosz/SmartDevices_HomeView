import React, { useRef, useState } from "react";
import "./SmartDevice.scss";
import BulbImage from "./../../Assets/Images/bulb.png";
import FavoriteImage from "./../../Assets/Images/star.png";

const SmartDevice = () => {
  return (
    <div className="SmartDevice">
      <div className="SmartDevice__header">
        <div className="SmartDevice__favoriteButtonHolder">
          <img
            alt="is device favorite"
            src={FavoriteImage}
            className="SmartDevice__favoriteImage"
          />
        </div>
        <div className="SmartDevice__deviceStatus"></div>
      </div>
      <h3 className="SmartDevice_deviceName">Żaróweczka</h3>
      <div className="SmartDevice_imageHolder">
        <img
          alt="device image"
          src={BulbImage}
          className="SmartDevice__image"
        />
      </div>
      <p className="SmartDevice__mainInformation">80%</p>
      <div className="SmartDevice__statusSwitcher"></div>
      <p className="SmartDevice__deviceType">SmartBulb</p>
    </div>
  );
};

export default SmartDevice;
