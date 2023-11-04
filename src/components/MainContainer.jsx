import React from "react";
import Header from "./Header";
import Input from "./Input";
import Sound from "./Sound";

function MainContainer() {
  return (
    <div className="max-w-3xl m-auto my-12">
      <Header />
      <Input />
      <Sound />
    </div>
  );
}

export default MainContainer;
