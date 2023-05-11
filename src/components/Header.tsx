import React, { FC } from "react";

type HeaderProps = {
  createDropdown: (event: any) => void;
  changePage: (page: string) => void;
};
export const Header: FC<HeaderProps> = ({ createDropdown, changePage }) => {
  return (
    <>
      <div className="header__container">
        <button
          className="header__logo-button"
          onClick={() => changePage("home")}
        >
          <img className="header__logo" src="Archlogo2.png" alt=""></img>
        </button>
        <div className="header__info-container">
          <button
            onClick={() => changePage("projectlist")}
            className="header__titles"
          >
            projectlist
          </button>
          <button
            onClick={() => changePage("studio")}
            className="header__titles"
          >
            studio
          </button>
          <button
            onClick={() => changePage("contact")}
            className="header__titles"
          >
            contact
          </button>
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
