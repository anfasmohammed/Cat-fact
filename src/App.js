import axios from "axios";
import { useState,useEffect } from "react";


function App() {
  const [catfact,setCatfact]=useState("")
  const fetchData= async ()=>{
    const {data} = await axios.get("https://catfact.ninja/fact")
    setCatfact (data.fact)
  }

    useEffect(()=>{
      fetchData()
      
    },[])

  

  return (
    <div className="App bg-slate-900 flex flex-col gap-9 justify-center items-center h-screen mt-9">
      
      <h1 className=" bg-zinc-800 text-5xl text-gray-400 mr-3 ml-3 ">{catfact}</h1>
    <button onClick={fetchData} className=" font-mono font-semibold bg-gray-100 text-slate-600 px-7 py-2 text-2xl">Generate Cat Fact</button>
    </div>
  );
}

export default App;
