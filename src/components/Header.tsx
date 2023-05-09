import React, { FC } from "react";

type HeaderProps = {
  createDropdown: (event: any) => void;
};
export const Header: FC<HeaderProps> = ({ createDropdown }) => {
  return (
    <>
      <div className="header__container">
        <div>
          <div className="header__titles">logo</div>
        </div>
        <div className="header__info-container">
          <div className="header__titles">projects</div>
          <div className="header__titles">search</div>
          <div className="header__titles">test</div>
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
