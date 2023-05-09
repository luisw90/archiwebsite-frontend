import React, { FC } from "react";
import { ArchData } from "../Types";

type ArchImageProps = {
  images: ArchData[];
};
export const Articles: FC<ArchImageProps> = ({ images }) => {
  return (
    <div className="grid__container">
      {images &&
        images.map((data: ArchData) => {
          return (
            <div key={data.id} className="article__container">
              <div className="article__button-container">
                <button className="article__button">
                  <img
                    className="article__button-image"
                    src="edit2.png"
                    alt=""
                  />
                </button>
                <button className="article__button">X</button>
              </div>

              <img className="article__image" src={data.image} alt="" />
              <p className="article__title">{data.title}</p>
            </div>
          );
        })}
    </div>
  );
};
