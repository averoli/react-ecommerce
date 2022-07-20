import { useState, useEffect } from "react";

import IconBag from "../../components/iconBag/index";
import Products from "../Products/index";

const Main = () => {
  const url =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <IconBag length={4} />
      <Products products={data} />
    </>
  );
};

export default Main;
