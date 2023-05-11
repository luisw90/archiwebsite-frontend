import React, { FC, useRef, useState } from "react";
import { ArchData } from "../Types";

type ArchImageProps = {
  projects: ArchData[];
  handleUpdateSubmit: (
    event: any,
    inputs: { id: string; title: string; description: string },
    editimage: string
  ) => void;
  handleDelete: (event: any) => void;
};
export const Articles: FC<ArchImageProps> = ({
  projects,
  handleUpdateSubmit,
  handleDelete,
}) => {
  const [editSettings, setEditSettings] = useState("");
  const [deleteSettings, setDeleteSettings] = useState("");
  const [editimage, setEditImage] = useState<string>("");
  const [editimageName, setEditImageName] = useState<string>("");
  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    description: "",
  });

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
          setEditImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
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

  const toggleEdit = (e: any) => {
    setDeleteSettings("");
    if (editSettings === "") {
      setEditSettings(e.currentTarget.value);
    } else if (editSettings === e.currentTarget.value) {
      setEditSettings("");
    }
  };

  const toggleDelete = (e: any) => {
    setEditSettings("");
    if (deleteSettings === "") {
      setDeleteSettings(e.currentTarget.value);
    } else if (deleteSettings === e.currentTarget.value) {
      setDeleteSettings("");
    }
  };

  const handleEditImage = (data: ArchData) => {
    if (editimage === "") {
      return <img className="create__image" src={data.image} />;
    } else {
      return <img className="create__image" src={editimage} />;
    }
  };

  const handleEdit = (data: ArchData) => {
    if (deleteSettings !== "" && deleteSettings === data._id) {
      return (
        <div className="article__image">
          <div className="delete__container">
            <div className="delete__title"> Are you sure?</div>
            <div className="delete-button__container">
              <button
                value={data._id}
                onClick={toggleDelete}
                className="create__button"
              >
                Cancel
              </button>
              <button
                value={data._id}
                onClick={(e) => {
                  setDeleteSettings("");
                  handleDelete(e);
                }}
                className="create__button"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    } else if (editSettings !== "" && editSettings === data._id) {
      return (
        <div className="article__image">
          <div className="fadeInTarget">
            <div className="create-image__container">
              <div ref={userImage} className="create-image__inner-container ">
                {<>{handleEditImage(data)}</>}
              </div>
              <label className="custom-file-upload">
                <input
                  type="file"
                  onChange={(e) => changeImage(e.target.files)}
                />
                Choose image
              </label>
            </div>
            <form
              id="dropdownTarget"
              className="create__container"
              style={{ opacity: 1 }}
              onSubmit={(e) => {
                setEditSettings("");
                handleUpdateSubmit(e, inputs, editimageName);
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
                  onChange={handleInputChange}
                  required
                  value={inputs.description}
                  className="create__input-description"
                />
              </label>
              <button className="create__button" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return <img className="article__image" src={data.image} alt="" />;
    }
  };

  return (
    <div className="grid__container">
      {projects &&
        projects.map((data: ArchData) => {
          return (
            <div key={data.title} className="article__container">
              <div className="article__button-container">
                <button
                  value={data._id}
                  onClick={(e) => {
                    setInputs({
                      id: e.currentTarget.value,
                      title: data.title,
                      description: data.description,
                    });
                    toggleEdit(e);
                  }}
                  className="article__button"
                >
                  <img
                    className="article__button-image"
                    src="edit2.png"
                    alt=""
                  />
                </button>
                <button
                  value={data._id}
                  onClick={toggleDelete}
                  className="article__button"
                >
                  X
                </button>
              </div>

              {<>{handleEdit(data)}</>}
              <p className="article__date">{data.date}</p>
              <p className="article__title">{data.title}</p>
            </div>
          );
        })}
    </div>
  );
};
