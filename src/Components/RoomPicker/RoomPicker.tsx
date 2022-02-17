import React, { useRef, useState } from "react";
import "./RoomPicker.scss";

import { MdFavoriteBorder } from "react-icons/md";

const RoomPicker = () => {
  const indicator = useRef<HTMLDivElement | null>(null);
  const [currentView, setCurrentView] = useState<number>(1);

  const isCurrentViewEqual = (viewID: number) => {
    return currentView === viewID;
  };

  const changeScreen = (e: any) => {
    indicator.current?.scrollTo({
      left: e.target.offsetLeft - 90,
      behavior: "smooth",
    });
    setCurrentView(Number(e.target.getAttribute("room-id")));
  };

  return (
    <div className="RoomPicker">
      <div ref={indicator} className="RoomPicker_Holder">
        <button
          onClick={changeScreen}
          room-id={0}
          className="RoomPicker__roomButton"
          style={{ color: isCurrentViewEqual(0) ? "orange" : "black" }}
        >
          <MdFavoriteBorder size="25" />
        </button>
        <button
          onClick={changeScreen}
          room-id={1}
          className="RoomPicker__roomButton"
          style={{ color: isCurrentViewEqual(1) ? "orange" : "black" }}
        >
          All
        </button>
        <button
          onClick={changeScreen}
          room-id={2}
          className="RoomPicker__roomButton"
          style={{ color: isCurrentViewEqual(2) ? "orange" : "black" }}
        >
          Home Office
        </button>
        <button
          onClick={changeScreen}
          room-id={3}
          className="RoomPicker__roomButton"
          style={{ color: isCurrentViewEqual(3) ? "orange" : "black" }}
        >
          Beedroom
        </button>
        <button
          onClick={changeScreen}
          room-id={4}
          className="RoomPicker__roomButton"
          style={{ color: isCurrentViewEqual(4) ? "orange" : "black" }}
        >
          Living Room
        </button>
        <button
          onClick={changeScreen}
          room-id={5}
          className="RoomPicker__roomButton"
          style={{ color: isCurrentViewEqual(5) ? "orange" : "black" }}
        >
          Home Office
        </button>
        <button
          onClick={changeScreen}
          room-id={6}
          className="RoomPicker__roomButton"
          style={{ color: isCurrentViewEqual(6) ? "orange" : "black" }}
        >
          Beedroom
        </button>
        <button
          onClick={changeScreen}
          room-id={7}
          className="RoomPicker__roomButton"
          style={{ color: isCurrentViewEqual(7) ? "orange" : "black" }}
        >
          Living Room
        </button>
      </div>
    </div>
  );
};

export default RoomPicker;
