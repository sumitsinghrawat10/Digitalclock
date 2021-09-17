import React, { useState } from "react";
import "./App.css";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  let showdate = new Date();
  let displaytodaydate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();

  return (
    <div class="body">
      <h2>Digital Clock</h2>
      <div class="container">
        <div id="time">
          <h3> {ctime} </h3>
        </div>
        <div id="date">
          <h1> {displaytodaydate} </h1>
        </div>
      </div>
    </div>
  );
};
export default App;
