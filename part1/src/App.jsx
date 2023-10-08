import React, { useState } from "react";

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

const App = (props) => {
  const [counter, setCounter] = useState(0);

  /*  setTimeout(() => setCounter(counter + 1), 1000); */
  const handleClick = () => {
    console.log("clicked");
  };

  console.log("rendering...", counter);

  return (
    <div>
      <h2>contador: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Plus</button>
      <button onClick={() => setCounter(0)}>Zero</button>
      <Footer />
    </div>
  );
};

export default App;
