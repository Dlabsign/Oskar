
const InfoContainer = (props) => {
  return (
    <div className="flex justify-between mt-5 shadow w-full ">
      <div className="info-container rounded-l-md py-5 px-10 flex justify-between items-center ">
        <h4 className="tahun text-base text-white ">{props.year}</h4>
        <div className="info-img">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png"
            alt=""
          />
        </div>
        <h4 className="name text-xl text-white flex flex-wrap justify-center items-center text-center">
          {props.Name}
        </h4>
        <div className="flex items-center">
          <i className="fa-solid fa-location-dot fa-flip" />
          <p className=" text-xs ml-2 ">{props.Addres}</p>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-message fa-beat" />
          <p className=" text-xs ml-2 ">{props.Chat}</p>
        </div>
      </div>
      <button className="info-button rounded-r ">
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
};
export default InfoContainer
