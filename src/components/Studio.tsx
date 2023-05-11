import React, { FC, useEffect, useState } from "react";
import { ArchTeam } from "../Types";
import { getArchTeam } from "../api/api_calls";

export const Studio = () => {
  const [team, setTeam] = useState<ArchTeam[]>([]);

  useEffect(() => {
    console.log("useffect");
    try {
      const getData = async () => {
        const data = await getArchTeam();
        setTeam(data);
        console.log(data);
      };
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ul id="list">
      {team &&
        team.map((data: ArchTeam) => {
          return (
            <li key={data._id} className="teamlist__row">
              <div className="teamlist__info">{data.name}</div>
              <div className="teamlist__info">{data.profession}</div>
              <div className="teamlist__info">{data.email}</div>
            </li>
          );
        })}
    </ul>
  );
};
