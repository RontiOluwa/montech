import Back from "../components/Board/Back";
import Board from "../components/Board/Board";
import Users from "../components/Board/Users";

export default function Spectating() {
  return (
    <div className="w-11/12 relative m-auto mt-12">
      <Back />
      <div className="lg:w-1/3 m-auto w-full mt-20 lg:mt-0">
        <h4 className="text-center text-white text-xl">Spectating</h4>
        <Users name="Oponent" time="00:00:00" />
        <Board />
        <Users name="Oponent 1" time="00:00:00" />
      </div>
    </div>
  );
}
