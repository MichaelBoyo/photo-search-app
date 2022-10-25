
import { useState, useEffect } from "react";

function MouseMove() {
  const [cord, sertCord] = useState({ x: 0, y: 0 });
  const mousemove = (e) => {
    sertCord({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  return (
    <div className="App">
      <h1>Cord X - {cord.x}</h1>
      <h1>Cord Y - {cord.y}</h1>
    </div>
  );
}

export default MouseMove;
