import React, { useRef, useState } from "react";

export const Create = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState<string>("");

  const userImage = useRef<HTMLDivElement>(null);
  const handleImage = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0];
      const fileType: string = fileRef.type || "";
      if (fileType === "image/jpeg") {
        userImage.current?.classList.remove("hidden");
        const reader = new FileReader();
        reader.readAsBinaryString(fileRef);
        reader.onload = (ev: any) => {
          //uploadedImageName.current!.innerHTML = files[0].name;
          //setFile(files[0]);
          setImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
        };
      }
    }
  };

  return (
    <div className="fadeInTarget">
      <div className="create-image__container">
        <div ref={userImage} className="create-image__inner-container hidden">
          <img className="create__image" src={image} />
        </div>
        <label className="custom-file-upload">
          <input type="file" onChange={(e) => handleImage(e.target.files)} />
          Choose image
        </label>
      </div>

      <form
        id="dropdownTarget"
        className="create__container"
        style={{ opacity: 1 }}
      >
        <label className="create__titles">
          Title:
          <br></br>
          <input className="create__input" />
        </label>
        <label className="create__titles">
          Description:
          <br></br>
          <textarea className="create__input-description" />
        </label>
        <button className="create__button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
