import React from "react";

const imgstyle = {
  objectFit: "cover",
  width: "90vw",
  height: "60vh",
  marginLeft: "5vw",
  marginRight: "5vw",
};

function GalleryPic2({ img }) {
  return (
    <div>
      <img src={img} alt="gallerypic" style={imgstyle} />
    </div>
  );
}

export default GalleryPic2;
