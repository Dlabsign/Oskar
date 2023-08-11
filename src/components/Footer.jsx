const Footer = () => {
    return (
      <div className="footer  w-full h-3/6 bg-black  text-white flex justify-between items-start px-14 py-16 rounded-t-xl">
        <div className="footer-logo  w-1/4">
          <object
            data="/src/assets/Logo.svg"
            type="image/svg+xml"
            className="svg-logo"
          ></object>
          <p className="mt-1 text-base font-reguler">
            discover more in Dlabsign
          </p>
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png"
            alt=""
            className="w-48"
          /> */}
        </div>
        <div className="w-36 ">
          <h2 className="font-bold text-lg">ABOUT US</h2>
          <p className="text-sm font-reguler">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            pariatur.
          </p>
        </div>
        <div className="w-36">
          <h2 className="font-bold text-base">LONDON</h2>
          <p className="text-sm  font-reguler">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            pariatur.
          </p>
        </div>
        <div className="w-36">
          <h2 className="font-bold text-base">Want to Join The Events?</h2>
          <input
            type="text"
            placeholder="Hubungi kami"
            className=" rounded-md p-2 w-28"
          />
        </div>

        
      </div>
    );
}

export default Footer;