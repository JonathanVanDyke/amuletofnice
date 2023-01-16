import React from "react";

const UploadImage = ({ handleUpload }) => {
  const onImageChange = (e) => {
    handleUpload(e.target.files[0])
  }

  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
    </>
  )
}

export default UploadImage