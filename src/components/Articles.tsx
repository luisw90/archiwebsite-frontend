import React, { FC, useState } from "react";
import { ArchData } from "../Types";

type ArchImageProps = {
  projects: ArchData[];
};
export const Articles: FC<ArchImageProps> = ({ projects }) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    if (edit === false) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  };

  const handleImage = (image: string) => {
    return <img className="article__image" src={image} alt="" />;
  };

  const handleEdit = (data: ArchData) => {
    return (
      <div className="article__image">
        <form
          id="dropdownTarget"
          className="create__container fadeInTarget"
          style={{ opacity: 1 }}
        >
          <label className="create__titles">
            Title:
            <br></br>
            <input value={data.title} className="create__input" />
          </label>
          <label className="create__titles">
            Description:
            <br></br>
            <textarea
              value={data.description}
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

  return (
    <div className="grid__container">
      {projects &&
        projects.map((data: ArchData) => {
          return (
            <div key={data.id} className="article__container">
              <div className="article__button-container">
                <button onClick={toggleEdit} className="article__button">
                  <img
                    className="article__button-image"
                    src="edit2.png"
                    alt=""
                  />
                </button>
                <button className="article__button">X</button>
              </div>

              {edit === false && <>{handleImage(data.image)}</>}
              {edit === true && <>{handleEdit(data)}</>}
              <p className="article__title">{data.title}</p>
            </div>
          );
        })}
    </div>
  );
};
