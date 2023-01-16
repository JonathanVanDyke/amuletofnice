import React, { createRef, useState, useEffect } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import UploadImage from "./UploadImage";
import borderArts from "../constants/borderArts";

const Screenshot = ({ borderName }) => {
  
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const [imageURL, setImageUrl] = useState();

  useEffect(() => {
    setImageUrl(imageURL);
  }, [imageURL])

  console.log(image)

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
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
      <button onClick={downloadScreenshot}>Download screenshot</button>
      <div
        ref={ref}
        style={{
          padding: "10px",
          marginTop: "20px"
        }}
      >
        <div  
          className="card"
        >
          <img
            className='border'
            src={borderArts(borderName)}
            alt="card-border"
            height="700px"
            width="500px"
          />
          <img 
            className="card-art"
            src={imageURL} 
            height="100%" 
            width="500" 
            alt="card-background"
          />
        </div>
        <UploadImage
          handleUpload={handleUpload}
        />
      </div>
    </div>
  );
};

export default Screenshot;
