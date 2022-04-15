import Button from "../Table/Button";
import Link from "next/link";
export default function Head() {
  return (
    <tr className="border-2 border-transparent border-t-slate-100">
      <td className="text-xs">28</td>
      <td className="text-xs">2</td>
      <td className="text-xs">0.5 ETH</td>
      <td className="text-xs">0</td>
      <td className="text-xs">04/04/2022</td>
      <td className="text-xs">
        {" "}
        <Link href="/joined">
          <a>
            <Button shade="dark" text="Request to join" />
          </a>
        </Link>
        <Link href="/spectating">
          <a>
            <Button shade="light" text="Spectate" />
          </a>
        </Link>
      </td>
    </tr>
  );
}
