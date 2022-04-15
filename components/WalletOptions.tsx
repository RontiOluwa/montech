import { WalletOptions } from "../interface/Interface";

export default function Button({ shade, img, text }: WalletOptions) {
  return (
    <div>
      <button
        className={`w-72 p-3  mt-5 text-sm rounded-3xl ${
          shade == "dark"
            ? "light-blue-bg text-white"
            : "text-black border-slate-300 border-2"
        } inline-flex z`}
      >
        <img src={img} className="relative left-4" width={20} />
        <span className="w-11/12">{text}</span>
      </button>
    </div>
  );
}
