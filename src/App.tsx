import { useEffect, useState } from "react";
import HomeAdd from "./Todo-list/HomeLogin/HomeAdd";
import "./App.css"
import Content from "./Todo-list/Mounted/Content";
const App = () => {
  const [hide,setHide] = useState<Boolean>(false)
  const [title,setTitle] = useState<string>('')
  useEffect(() =>{
      setHide(false);
      document.title = title
      console.log('title')
  },[title])

  return (
    <div>
         <div className="container" >
      <div>
        <h1 id="add-users">Add User</h1>
        <HomeAdd/>
      </div>
    </div>
      <div>
      <button onClick={()=>setHide(!hide)}  >Toggle</button>
      {hide && <Content/> }
      </div>
      <div>
        <input type="text" placeholder="Add Title" onChange={(e)=>setTitle(e.target.value)} />
      </div>
    </div>
  );
};
export default App;
