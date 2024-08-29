import React, { useEffect, useState } from "react";

function App() {

  const [count, setCounter] = useState(0);
  const [data, setData] = useState("Ram");

  useEffect(() => {
    console.log("component mounted");
  }, [data]);

  function handleUpdate() {
    setCounter(count + 1);
  }

  function updateData() {
    setData("Seeta");
  }

  return (
    <>
      <h1>Button Clicked {count} Times</h1>
      <button onClick={handleUpdate}>Click</button><br />
      <button onClick={updateData}>Update Data</button>
    </>
  );
}

export default App;