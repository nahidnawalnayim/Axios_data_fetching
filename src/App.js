// import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

// import { Axios } from 'axios';
function App() {
  
const [qoute,setQoute]=useState(null);
useEffect(()=>{

const fetchData=async ()=>{
  const res=await fetch("http://localhost:8080/api/v1/users/633be5c26a22d293cc6ab5be");
  const data=await res.json();
  setQoute(data)
  console.log(typeof data);
};
fetchData()
},[])
  return (
    <div className="App">
      user list
      
      
       
    

      
          <h1>{qoute?.name}</h1>
          <h3>{qoute?.email}</h3>
         
        
    
          
        
      
      
    </div>
  );
}

export default App;
