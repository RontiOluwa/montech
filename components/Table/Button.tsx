import { ButtonProps } from "../../interface/Interface";

export default function Button({ shade, text }: ButtonProps) {
  return (
    <button
      className={`m-1 p-3 mt-5 text-sm rounded-lg ${
        shade == "dark"
          ? "light-blue-bg text-white w-36"
          : "text-blue-600 border-2 w-36 border-blue-500"
      }`}
    >
      <span>{text}</span>
    </button>
  );
}
