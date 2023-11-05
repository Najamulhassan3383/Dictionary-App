import React from "react";
import Header from "./Header";
import Input from "./Input";
import Sound from "./Sound";
import Hero from "./Hero";

function MainContainer() {
  return (
    <div className="max-w-3xl m-auto my-12">
      <Header />
      <Input />
      <Hero />
    </div>
  );
}

export default MainContainer;
