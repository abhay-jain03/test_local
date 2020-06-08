import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
// import Glide, {
//   Controls,
//   Breakpoints,
// } from "@glidejs/glide/dist/glide.modular.esm";

export default function Carousel() {
  useEffect(() => {
    new Glide(".glide").mount();
  }, []);

  return (
    <>
      <h1>Hi!</h1>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">0</li>
            <li className="glide__slide">1</li>
            <li className="glide__slide">2</li>
          </ul>
        </div>
      </div>
    </>
  );
}
