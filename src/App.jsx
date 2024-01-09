import "./App.css";
import React from "react";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCounter from "./Components/DisplayCounter";
import Container from "./Components/Container";
import Control from "./Components/Controls";
import PrivacyMessage from "./Components/PrivacyMessage";
import { useSelector } from "react-redux";
function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="px-4 py-5 my-5 ">
      <Container>
        <Header></Header>
        {privacy ? <PrivacyMessage /> : <DisplayCounter />}
        <Control></Control>
      </Container>
    </center>
  );
}

export default App;
