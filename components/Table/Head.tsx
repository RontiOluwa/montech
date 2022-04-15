import { TableHeader } from "../../interface/Interface";

export default function Head({ text }: TableHeader) {
  return (
    <th className="text-xs text-left text-slate-400 font-medium">{text}</th>
  );
}
