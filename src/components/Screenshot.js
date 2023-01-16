import React, { createRef, useState, useEffect } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import UploadImage from "./UploadImage";
import borderArts from "../constants/borderArts";
import genericAttackRed from '../assets/generic-attack-red.png'

const Screenshot = ({ borderName }) => {
  
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/png",
    quality: 1.0
  });

  const [imageURL, setImageUrl] = useState();

  useEffect(() => {
    setImageUrl(imageURL);
  }, [imageURL])

  const download = (image, { name = "img", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);
  const handleUpload = (e) => { 
    const url = URL.createObjectURL(e)
    setImageUrl(url);
  };
  return (
    <div>
      <button 
        onClick={downloadScreenshot}
        className='Download-Button'
      >
        Download screenshot
      </button>
      <div
        ref={ref}
      >
        <div  
          className="card"
        >
          <div className="Card-Title">
            Amulet of Nice
          </div>
          <img
            className='border'
            src={borderArts(borderName)}
            alt="card-border"
            height="700px"
            width="500px"
          />
          <img 
            className="card-art"
            src={imageURL || genericAttackRed} 
            height="100%" 
            width="500" 
            alt="card-background"
          />
        </div>
      </div>
      <UploadImage
        handleUpload={handleUpload}
      />
    </div>
  );
};

export default Screenshot;
