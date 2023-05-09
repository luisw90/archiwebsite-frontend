import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Articles } from "../src/components/Articles";
import { Header } from "./components/Header";
import { ArchImages } from "./Types";
import { getArchiImages } from "./api/api_calls";
import { Create } from "./components/Create";

function App() {
  const [images, setImages] = useState<ArchImages[]>([]);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    try {
      const getRandomUser = async () => {
        const data = await getArchiImages();
        setImages(data);
      };
      getRandomUser();
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
        <Articles images={images} />
      </main>
    </div>
  );
}

export default App;
