import React, { FC } from "react";
import { ArchImages } from "../Types";

type ArchImageProps = {
  images: ArchImages[];
};
export const Articles: FC<ArchImageProps> = ({ images }) => {
  return (
    <div className="grid__container">
      {images &&
        images.map((data: ArchImages) => {
          const image = data.urls;
          return (
            <div key={image.regular} className="article__container">
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

              <img className="article__image" src={image.regular} alt="" />
              <p className="article__title">Siberian Husky</p>
            </div>
          );
        })}
    </div>
  );
};
