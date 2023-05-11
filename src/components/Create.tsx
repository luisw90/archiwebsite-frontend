import React, { FC, useRef, useState } from "react";

type CreateProps = {
  handleCreateSubmit: (
    event: any,
    inputs: { title: string; description: string },
    editimage: string
  ) => void;
};
export const Create: FC<CreateProps> = ({ handleCreateSubmit }) => {
  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [image, setImage] = useState<string>("");
  const [editimageName, setEditImageName] = useState<string>("");

  const userImage = useRef<HTMLDivElement>(null);
  const changeImage = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0];
      const fileType: string = fileRef.type || "";
      if (fileType === "image/jpeg") {
        userImage.current?.classList.remove("hidden");
        const reader = new FileReader();
        reader.readAsBinaryString(fileRef);
        reader.onload = (ev: any) => {
          setEditImageName(files[0].name);
          setImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
        };
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="fadeInTarget">
      <div className="create-image__container">
        <div ref={userImage} className="create-image__inner-container hidden">
          <img className="create__image" src={image} />
        </div>
        <label className="custom-file-upload">
          <input type="file" onChange={(e) => changeImage(e.target.files)} />
          Choose image
        </label>
      </div>

      <form
        id="dropdownTarget"
        className="create__container"
        style={{ opacity: 1 }}
        onSubmit={(e) => {
          if (inputs.title && inputs.description && editimageName) {
            handleCreateSubmit(e, inputs, editimageName);
          }
        }}
      >
        <label className="create__titles">
          Title:
          <br></br>
          <input
            type="title"
            name="title"
            required
            onChange={handleInputChange}
            value={inputs.title}
            className="create__input"
          />
        </label>
        <label className="create__titles">
          Description:
          <br></br>
          <textarea
            name="description"
            required
            onChange={handleInputChange}
            value={inputs.description}
            className="create__input-description"
          />
        </label>
        <button className="create__button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
