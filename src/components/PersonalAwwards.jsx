import { BtnComponent } from "./Button";


const AwardsContainer = () => {
  
  return (
    <div className="awards flex justify-between items-center h-full rounded-xl">
      <div className="header py-16 px-14 flex flex-col items-start justify-between">
        <p className="text-yellow font-medium text-base ">1-3</p>
        <h2 className="my-8 text-4xl text-white ">Personal Awards</h2>
        <div className="button  w-2/3 flex justify-between">
          <button >
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button>
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>
      <div className="awards-slider flex h-full ">
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
      </div>
    </div>
  );
};

export default AwardsContainer


const AwardsCard = () => {
  return (
    <div
      className="awards-card  flex items-center flex-col justify-between py-8 px-5">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png"
        className="card-logo"
      />
      <div className=" flex flex-col items-center ">
        <h2 className="text-2xl text-white text-center">World Design Awards</h2>
      </div>
      <p className="text-white text-opacity-75 text-sm text-center">
        Lorem ipsum dolor sit amet atque adipisci!
      </p>
      <BtnComponent btnP="SEE MORE" />
    </div>
  );
};