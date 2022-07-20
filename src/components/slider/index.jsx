import { useState } from "react";

import "./style.css";


const dataSlider = [
  {
    h3: "From Itali",
    img: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    h3: "From Melbourn",
    img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    h3: "From Miami",
    img: "https://images.unsplash.com/photo-1616048056617-93b94a339009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
  },
  {
    h3: "From Washington",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    h3: "From Chicago",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

const Slider = () => {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(false)
  };
  return (
    <div className="main">
      <div className="container">
        {dataSlider.map((elem, index) => {
          return (
            <div className="slide active={true}" key={index}>
              <h3>{elem.h3}</h3>
              <img src={elem.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
