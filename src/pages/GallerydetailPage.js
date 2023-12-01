import React from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../components/MainNav";
import Btn from "../components/Btn";
import GalleryPage2Pic from "../assets/GalleryPage2Pic.png";
import GalleryPic2 from "../components/GalleryPic2";

const textst = {
  fontSize: "calc(1.25vh + 1.5vw)",
  marginLeft: "5vw",
  marginBottom: "1vh",
};

function GallerydetailPage(props) {
  return (
    <div>
      <TopNav text="퉁퉁이 사진" icon1={no_icon} icon2={no_icon} />
      <br />
      <br />
      <p style={textst}>2023.11.18</p>
      <GalleryPic2 img={GalleryPage2Pic} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Btn text="사진 올리기" link="/galleryhome" />
      <MainNav />
    </div>
  );
}

export default GallerydetailPage;
