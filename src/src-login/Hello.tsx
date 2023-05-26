import React from "react";

type ValueName = {
    names: string;
}
const Home = (props: ValueName) => {
  return (
    <div className="box-welcome">
      <h2>Xin chao: {props.names}</h2>
    </div>
  );
};

export default Home;
