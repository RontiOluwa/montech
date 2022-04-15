import React, { useState, useEffect } from "react";
import Button from "../components/Base/Button";
import Header from "../components/Base/Header";
import Layout from "../components/Base/Layout";
import Modal from "../components/Modal";
import Available from "../components/Table/Available";
import Unavailable from "../components/Table/Unavailable";

export default function Games() {
  const [visibility, setVisibilty] = useState(false);
  const [available, setAvailable] = useState(false);

  const HideModal = (): void => {
    setVisibilty(false);
  };

  return (
    <div className="m-auto w-11/12 p-inherit mt-8">
      <div className="text-right">
        <a>
          <Button shade="light" img="/Calendar.svg" text="MAY 18 - MAY 24" />
        </a>
        <a onClick={() => setVisibilty(true)}>
          <Button shade="dark" img="/add.svg" text="Create Room" />
        </a>
      </div>
      <div className="mt-8">
        <div>
          <a
            onClick={() => setAvailable(true)}
            className={`${
              available == true &&
              "border-transparent border-b-black border-solid border-2"
            } cursor-pointer text-sm  p-2`}
          >
            Available Games
          </a>
          <a
            onClick={() => setAvailable(false)}
            className={`${
              available == false &&
              "border-transparent border-b-black border-solid border-2"
            } md:p-2 p-0 text-sm cursor-pointer`}
          >
            Unavailable Games
          </a>
        </div>
        <div className="w-full bg-white mt-2 p-8 overflow-x-scroll">
          {available == true ? <Available /> : <Unavailable />}
        </div>
      </div>
      {visibility === true && <Modal hideModal={HideModal} />}
    </div>
  );
}
