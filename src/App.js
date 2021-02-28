import React,{useState} from 'react';
import axios from 'axios';
const res = axios.get("http://localhost:8080/api/movies/").then((data) => {
  console.log(data.data);
  return data.data;
})
function App() {
  const [data, setData] = useState(res);
  console.log(data);
  return (
    <></>
  );
}

export default App;
