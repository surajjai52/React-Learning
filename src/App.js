import  ".";
import React, {useState} from 'react'

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  let a = ["car","bus","app"];
  
  return (
    
    <div className="search">
      <input
      type="text"
      value={searchInput}
      placeholder="Search by the title ..."
      onChange={(e) => setSearchInput(e.target.value)}
    />
    {a.filter((val)=>{
    if(searchInput=="")
       {return val;}
       else if(val.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
           return val
    }).map((val,key)=>{
      return <div> {val} </div>
    })}
  </div>
  );
}