import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Articles } from "../src/components/Articles";
import { Header } from "./components/Header";
import { ArchData } from "./Types";
import {
  getArchItems,
  updateArchItem,
  createArchItem,
  deleteArchItem,
} from "./api/api_calls";
import { Create } from "./components/Create";

function App() {
  const [projects, setProjects] = useState<ArchData[]>([]);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await getArchItems();
        setProjects(data);
      };
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleCreateSubmit = async (
    e: React.FormEvent,
    inputs: { title: string; description: string },
    image: string
  ) => {
    e.preventDefault();
    setDropdown(false);
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, "0");
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();

    const archData: ArchData = {
      title: inputs.title,
      description: inputs.description,
      date: `${currentYear}-${currentMonth}-${currentDay}`,
      image: image,
    };
    const data = await createArchItem(archData);
    const newArchData = { _id: data, ...archData };
    setProjects((prevState) => {
      let nextState = [...prevState];
      nextState.push(newArchData);
      return nextState;
    });
  };

  const handleUpdateSubmit = async (
    e: React.FormEvent,
    inputs: { id: string; title: string; description: string },
    image: string
  ) => {
    e.preventDefault();
    const newArchData = {
      title: inputs.title,
      description: inputs.description,
      image: image,
    };
    await updateArchItem(newArchData, inputs.id);
    const index = projects.findIndex((x) => x._id === inputs.id);
    setProjects((prevState) => {
      let nextState = [...prevState];
      nextState[index].title = inputs.title;
      nextState[index].description = inputs.description;
      nextState[index].image = image;
      return nextState;
    });
  };

  const handleDelete = async (e: any) => {
    const id = e.target.value;
    console.log(id);
    await deleteArchItem(id);
    const index = projects.findIndex((x) => x._id === id);
    setProjects((prevState) => {
      let nextState = [...prevState];
      nextState.splice(index, 1);
      return nextState;
    });
  };

  const createDropdown = () => {
    if (dropdown === false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className="App">
      <header>
        <Header createDropdown={createDropdown} />
        {dropdown === true && (
          <Create handleCreateSubmit={handleCreateSubmit} />
        )}
      </header>
      <main>
        <Articles
          handleDelete={handleDelete}
          handleUpdateSubmit={handleUpdateSubmit}
          projects={projects}
        />
      </main>
    </div>
  );
}

export default App;
