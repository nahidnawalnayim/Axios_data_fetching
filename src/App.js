import "./App.css";
import { useEffect, useState } from "react";
import User from "./user";
function App() {
  const [qoute, setQoute] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "http://localhost:8080/api/v1/users"
      );
      const data = await res.json();
      setQoute(data);
      console.log(res);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      user list
      {qoute.map((user) => (
        <User id={user._id} name={user.name} key={user._id}/>
      ))}
    </div>
  );
}

export default App;
