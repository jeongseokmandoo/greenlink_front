import React from "react";

const imgstyle = {
  objectFit: "cover",
  marginRight: "5vw",
  height: "20vh",
  width: "30vw",
};

function GalleryPic({ img }) {
  return (
    <div>
      <img src={img} alt="gallerypic" style={imgstyle} />
    </div>
  );
}

export default GalleryPic;
