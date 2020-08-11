import React from "react";
import "./App.css";
import NavBar from "./Components/navbar/NavBar";
import Footer from "./Components/footer/Footer";
import Card from "./Components/card/Card";
import notes from "./notes";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div>
        {notes.map((note) => {
          return <Card title={note.title} content={note.content} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
