import Head from "./Head";
import Row from "./Row";

import { ButtonProps } from "../../interface/Interface";

export default function Available() {
  return (
    <table className="w-120 md:w-full">
      <thead>
        <tr>
          <Head text="GAMEID" />
          <Head text="LIMIT" />
          <Head text="ENTRY FEE" />
          <Head text="NO. OF PLAYERS" />
          <Head text="GAMDATE CREATED" />
          <Head text="" />
        </tr>
      </thead>
      <tbody>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </tbody>
    </table>
  );
}
