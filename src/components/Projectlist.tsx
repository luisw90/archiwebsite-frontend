import React, { FC } from "react";
import { ArchData } from "../Types";

type ArchProjectsProps = {
  projects: ArchData[];
};
export const Projectlist: FC<ArchProjectsProps> = ({ projects }) => {
  return (
    <ul id="list" className="projectlst__container">
      {projects &&
        projects.map((data: ArchData) => {
          return (
            <li key={data._id} className="projectlist__row">
              <div className="projectlist__date">{data.date}</div>
              <div className="projectlist__title">{data.title}</div>
              <div className="projectlist__description">{data.description}</div>
              <div className="projectlist__link">link</div>
            </li>
          );
        })}
    </ul>
  );
};
