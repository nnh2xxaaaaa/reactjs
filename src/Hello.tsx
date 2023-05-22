import React, { useEffect, useState } from "react";
import { Handle } from "./InterFaces";

const datdInter = [
  "Cash",
  "Home",
  "Bank",
  "ReNameBank",
  "ValueBank",
  "Exchange",
  "ExchangeValueBank",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
];

const Home = () => {
  const [data, setData] = useState<Handle[]>([]);
  const [showData, setShowData] = useState(false);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      const updatedData = fetchedData.map((e: any, i:  number) => ({
        ...e,
        inter: datdInter[i],
      }));
      setData(updatedData);
    };
    fetchData();
  }, []);

  const handleData = async () => {
    const fetchedData = await getData();
    const updatedData = fetchedData.map((e: any, i:  number) => ({
      ...e,
      inter: datdInter[i],
    }));
    setData(updatedData);
    setShowData(true);
  };
  
  const removerHanleData = () => {
    setShowData(false);
  };
  
  console.log(data)

  const renderedData = data.map((e) => (
    <div key={e.id}>
      <h1>Xin chao {e.name}</h1>
      <div>
        <h1>Address: {e.address.city}</h1>
        <h1>Address: {e.inter}</h1>
      </div>
      <div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Hello React JS</h1>
      <button onClick={handleData}>Handle Data JSON</button>
      <button onClick={removerHanleData}>Remove Handle Data JSON</button>
      {showData && renderedData}
    </div>
  );
};

export default Home;
