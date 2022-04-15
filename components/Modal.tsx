import Button from "./Table/Button";
import { ModalInterface } from "../interface/Interface";

export default function Modal({ hideModal }: ModalInterface) {
  return (
    <div
      className="fixed z-10 left-0 top-0 w-full h-full pt-56 p-2"
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div className="bg-white p-6 m-auto rounded-lg w-full md:w-1/3">
        <h3 className="font-semibold text-lg">Create New Room</h3>
        <div className="mt-7">
          <label className="text-base font-semibold">Entry Fee</label>
          <div>
            <select className="w-full border-slate-200 p-2 border-2 rounded-md mt-4">
              <option>0.003 ETH</option>
            </select>
          </div>
        </div>
        <div className="mt-7">
          <label className="text-base font-semibold">Room Privacy</label>
          <div>
            <select className="w-full border-slate-200 p-2 border-2 rounded-md mt-4">
              <option>Public</option>
            </select>
          </div>
        </div>
        <div className="text-right mt-4">
          <a onClick={() => hideModal()}>
            <Button shade="light" text="Cancle" />
          </a>
          <Button shade="dark" text="Save" />
        </div>
      </div>
    </div>
  );
}
