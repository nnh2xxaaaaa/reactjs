import React from "react";

type ValueName = {
    names: string;
}

const Home = (props: ValueName) => {
  return (
    <h1>Ho va Ten: {props.names}</h1>
  );
};

export default Home;
