import Header from "./Header";
import Input from "./Input";

import Hero from "./Hero";

function MainContainer() {
  return (
    <div className="max-w-3xl mx-12 my-12 md:mx-auto">
      <Header />
      <Input />
      <Hero />
    </div>
  );
}

export default MainContainer;
