import { BtnComponent} from "../components/Button";

const Card = () => {
  return (
    <div className="card-container  rounded-md mt-12 ">
      <div className="card rounded-lg px-6 py-6 animate__animated animate__zoomIn">
        <div className="card-header">
          <h2 className="text-white mt-5 text-xl font-medium tracking-tight">
            01
          </h2>
          <p className=" text-sm font-medium text-yellow-300">
            CHARACTER DESIGN
          </p>
        </div>
        <div className="card-img p-2 bg-white rounded-md shadow-lg my-5">
          <img src="/src/assets/img/ill.png" alt="" />
        </div>
        <h3 className=" text-white  text-2xl font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-white   text-opacity-75 mt-2 text-sm mb-3">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
        <div className="hastag my-4 flex flex-wrap ">
          <p className="cursor-pointer inline-block bg-yellow-400 mr-2 mb-2 px-3 py-1 rounded text-xs font-bold">
            2d
          </p>
          <p className="cursor-pointer inline-block bg-yellow-400 mr-2 mb-2 px-3 py-1 rounded text-xs font-bold">
            Daniel Kurnia
          </p>
          <p className="cursor-pointer inline-block bg-yellow-400 mr-2 mb-2 px-3 py-1 rounded text-xs font-bold">
            2d
          </p>
          <p className="cursor-pointer inline-block bg-yellow-400 mr-2 mb-2 px-3 py-1 rounded text-xs font-bold">
            Character
          </p>
        </div>
      </div>
      <div className="footer-btn pl-6">
        <BtnComponent btnP="LEARN MORE" />
      </div>
    </div>
  );
};

export default Card;
