import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Articles } from "../src/components/Articles";
import { Header } from "./components/Header";
import { ArchImages } from "./Types";

function App() {
  const [images, setImages] = useState<ArchImages[]>([]);
  useEffect(() => {
    try {
      const getRandomUser = async () => {
        //const data = await getUser();
        //setUser([data]);
      };
      getRandomUser();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="App">
      <header className="header__container">
        <Header />
      </header>
      <main className="grid__container">
        <Articles />
      </main>
    </div>
  );
}

export default App;
