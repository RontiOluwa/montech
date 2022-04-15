import { WalletOptions } from "../../interface/Interface";

export default function Button({ shade, img, text }: WalletOptions) {
  return (
    <button
      className={`m-1 p-3 mt-5 w-full text-sm rounded-md ${
        shade == "dark"
          ? "light-blue-bg text-white md:w-40"
          : "text-black border-2 md:w-52 border-slate-300"
      } inline-flex z`}
    >
      <img src={img} className="relative left-2 m-1" width={12} />
      <span className="w-11/12">{text}</span>
    </button>
  );
}
