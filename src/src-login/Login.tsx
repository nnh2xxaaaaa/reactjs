/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Home from "./Hello";

const HomeLogin = () => {
  const [textDefault, setTextDefault] = useState("Huy");
  const [inputText, setInputText] = useState("");
  const [pushArray, setPushArray] = useState<string[]>([]);


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextDefault(e.target.value);
  };

  const handleInputEnter = () => {
    setInputText(textDefault);
  };

  const addToArray = () => {
    setPushArray((prevArray) => [...prevArray, inputText]);
  };

  const deleteButton = (index: number) => {
    setPushArray((prevData) => {
      const pushArray = [...prevData];
      pushArray.splice(index, 1);
      return pushArray;
    });
  };

  const RenderValue = () => {
    return (
      <>
        {pushArray.map((array, index) => (
          <div key={index}>
            <h1>Test render: {array}</h1>
            <button onClick={() => deleteButton(index)}>delete</button>
          </div>
        ))}
      </>
    );
  };

  return (
    <div style={{ flex: 1, justifyContent: "center" }}>
      <h1>Login Form Name</h1>
      <input type="text" onChange={handleInput} />
      <Home names={inputText} />
      <button onClick={handleInputEnter}>Click Add Name</button>
      <button onClick={() => setInputText("")}>Reset Add Name</button>
      <button onClick={addToArray}>Push Array</button>
      <RenderValue />
    </div>
  );
};

export default HomeLogin;
