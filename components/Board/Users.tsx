import { UserInterface } from "../../interface/Interface";

export default function User({ name, time }: UserInterface) {
  return (
    <div className="flex mt-4">
      <div className="w-3/6">
        <a className="text-white text-sm flex">
          <img src="/user.svg" width={35} />
          <span className="p-4">{name}</span>
        </a>
      </div>
      <div className="w-3/6">
        <a className="float-right text-white dark-light-bg p-2 w-24 text-center rounded-md">
          {time}
        </a>
      </div>
    </div>
  );
}
