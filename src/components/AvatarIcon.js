import React from "react";

function AvatarIcon({ src, alt, onClick }) {
  return (
    <div>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
}

export default AvatarIcon;
