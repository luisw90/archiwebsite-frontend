import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Articles } from "../src/components/Articles";
import { Header } from "./components/Header";
import { ArchData } from "./Types";
import { getArchItems } from "./api/api_calls";
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

  const createDropdown = () => {
    if (dropdown === false) {
      setDropdown(true);
      //dropdownTarget!.classList.add("fadeInTarget");
    } else {
      setDropdown(false);
      //dropdownTarget!.classList.add("fadeOutTarget");
    }
  };

  return (
    <div className="App">
      <header>
        <Header createDropdown={createDropdown} />
        {dropdown === true && <Create />}
      </header>
      <main>
        <Articles projects={projects} />
      </main>
    </div>
  );
}

export default App;
