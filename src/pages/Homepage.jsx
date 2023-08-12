import React, { useState } from "react";
// Komponen
import { BtnComponent, BtnEvent } from "../components/Button";
import Card from "../components/Card";
import "animate.css";
import Nav from "../components/Navbar";
import Exhibition from "../components/Information/infoPage1";
import InterViews from "../components/Information/infoPage2";
import UpdateBanner from "../components/updateBanner";
import AwardsContainer from "../components/PersonalAwwards";
import Footer from "../components/Footer";
import ExhibitionPage from "../components/Information/infoPage3";



const Home = () => {
  const [visibleElement, setVisibleElement] = useState(1);

  const ShowInterviews = () => {
    setVisibleElement(1);
  };
  const ShowTalk = () => {
    setVisibleElement(2);
  };
  const ShowExhibition = () => {
    setVisibleElement(3);
  };

  const [activeButton, setActiveButton] = useState(null);

    return (
      <>
        <Nav />

        {/* HOME PAGE BANNER */}
        <div className="home_section mt-28">
          <div className="banner flex justify-around items-center ">
            <div className="main-headline  justify-between w-2/5 flex flex-col items-start text-white">
              <h6 className="font-semibold text-xs">ILLUSTRATION</h6>
              <div className="txt-head mt-2 flex flex-col items-start">
                <h1 className="animate__animated animate__fadeInLeft">OSKAR</h1>
                <h1 className="animate__animated animate__fadeInLeft">
                  KADERA
                </h1>
              </div>
              <p className="font-md text-left">
                Oskar kadera is a World known British visual Artist
              </p>
              <BtnComponent btnP="LEARN MORE" />
            </div>
            <div className="con-img  w-3/5 flex items-center justify-center">
              <img src="./img/cube_fsd.png" alt="" />
            </div>
          </div>
        </div>

        {/* CARD HEADER */}
        <div className="flex w-full justify-between mt-12 mb-12">
          <Card />
          <Card />
          <Card />
        </div>

        {/* EVENT INFORMATION */}
        <div className="event-section  w-full  flex flex-col justify-center items-center my-20">
          {/* Header */}
          <div className="flex flex-col items-center mt-5">
            <h2 className="text-white text-2xl mx-auto">CONFERENCE & EVENTS</h2>
            <div className="btn-option  mt-8 flex px-1 py-2 rounded-md ">
              <button onClick={ShowInterviews}>
                <BtnEvent
                  buttonNumber={1}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
                  btnP2="INTERVIEWS"
                />
              </button>
              <button onClick={ShowTalk}>
                <BtnEvent
                  buttonNumber={2}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
                  btnP2="EVENT"
                />
              </button>
              <button onClick={ShowExhibition}>
                <BtnEvent
                  buttonNumber={3}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
                  btnP2="EXHIBITION"
                />
              </button>
            </div>
          </div>

          {/* Info Body */}
          <div className="info-component mt-12 w-full">
            {visibleElement === 1 && <Exhibition />}
            {visibleElement === 2 && <InterViews />}
            {visibleElement === 3 && <ExhibitionPage />}
          </div>
        </div>

        {/* UPDATE BANNER */}
        <div className="update">
          <UpdateBanner />
        </div>

        {/* PERSONAL AWWARDS */}
        <div className="mt-20">
          <AwardsContainer />
        </div>

        {/* FOOTER */}
        <div className="mt-20">
          <Footer />
        </div>
        <div
          className="ngisordewe flex items-center justify-center rounded-b-xl font-medium text-base py-1" 
        >
          @Dlabsign CopyRight Media 2023
        </div>
      </>
    );

}

export default Home