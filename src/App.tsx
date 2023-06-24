import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const imgArray = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  useEffect(() => {
    const slider: HTMLDivElement | null =
      document.querySelector("#dragable-options");
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    slider &&
      slider.addEventListener("mousedown", function (e) {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

    slider &&
      slider.addEventListener("mouseleave", function (e) {
        isDown = false;
      });

    slider &&
      slider.addEventListener("mouseup", function (e) {
        isDown = false;
      });

    slider &&
      slider.addEventListener("mousemove", function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
      });
  }, []);
  return (
    <div className="App">
      <div className="container" id="dragable-options">
        {imgArray.map((item, key) => (
          <div>
            <img src={`../img/${item}.png`} alt="first" key={key} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
