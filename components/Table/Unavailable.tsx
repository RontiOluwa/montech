import Head from "./Head";
import Row from "./Row";
export default function Unavailable() {
  return (
    <table className="w-120 md:w-full">
      <thead>
        <tr>
          <Head text="GAMEID" />
          <Head text="LIMIT" />
          <Head text="WINNER" />
          <Head text="AMOUNT WON" />
          <Head text="GAME ENDED" />
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
