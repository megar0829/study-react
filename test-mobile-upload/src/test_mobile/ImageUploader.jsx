import React, {useState} from "react";

export default function ImgaeUploader() {
  const [imageSrc, setImageSrc] = useState(null);

  const onUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null);
        resolve();
      };
    });
  }

  return (
    <div>
      <input
        accept="image/*"
        multiple type="file"
        onChange={onUpload}
        />
      <img 
        width={'100%'}
        src={imageSrc} 
      />
    </div>
  );
}