
const Nav = () => {
  return (
    <nav className="flex justify-between rounded-md items-center text-white drop-shadow-2xl pr-16 mt-8">
      <div className="nav-logo bg-white font-bold text-2xl flex rounded-l-md justify-center items-center">
        {/* <h2 className="text-primary">Dlabsign</h2> */}
        <object
          data="/src/public/Logo.svg"
          type="image/svg+xml"
          className="svg-logo"
        ></object>
        
      </div>
      <div className="nav-list ">
        <ul className="list flex uppercase text-xs">
          <li>
            <a className="mr-10" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="mr-10" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="list-icon rounded-full  flex justify-between items-center">
        <i className="rounded-full fa-brands fa-facebook-f" />
        <i className="rounded-full fa-brands fa-youtube"></i>
        <i className="rounded-full fa-brands fa-twitter"></i>
      </div>
    </nav>
  );
};

export default Nav;
