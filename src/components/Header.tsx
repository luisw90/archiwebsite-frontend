import React, { FC } from "react";

type HeaderProps = {
  createDropdown: (event: any) => void;
};
export const Header: FC<HeaderProps> = ({ createDropdown }) => {
  return (
    <>
      <div className="header__container">
        <div>
          <img className="header__logo" src="Archlogo2.png" alt=""></img>
        </div>
        <div className="header__info-container">
          <div className="header__titles">projectlist</div>
          <div className="header__titles">about</div>
          <div className="header__titles">contact</div>
        </div>
      </div>
      <div className="header__button-container ">
        <button onClick={createDropdown} className="header__button">
          create
        </button>
      </div>
    </>
  );
};
