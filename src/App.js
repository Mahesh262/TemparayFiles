// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Header from "./Dashboard/Header";
import "./App.scss";
// import axios from "axios";
import Child from "./Child";
import UserLogin from "./Forms/UserLogin";
import Testings from "./Testings";
import { Container } from "react-bootstrap";
function App() {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = React.useState("Hello World");
  const chooseMessage = (message) => {
    setMessage(message);
  };
  console.log(message);
  // const loadpost = async () => {
  //   let response = await axios.post("https://hoblist.com/api/movieList", {
  //     category: "movies",
  //     language: "kannada",
  //     genre: "all",
  //     sort: "voting",
  //   });
  //   setMovies(response.data);

  //   // let response = await axios.get(
  //   //   // "https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1"
  //   //   // {
  //   //   //   headers: {
  //   //   //     "X-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
  //   //   //     "X-tenant-key": "DIVANOR123",
  //   //   //   },
  //   //   // }
  //   // );
  //   setMovies(response.data);
  // };
  // console.log(movies);

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
  //       {
  //         headers: {
  //           Authorization: "Bearer ",
  //           "X-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
  //           "X-tenant-key": "DIVANOR123",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((response) => setData(response.data))
  //     .catch((error) => console.error(error));
  // }, []);

  // console.log(data);

  // useEffect(() => {
  //   loadpost();
  // }, []);

  return (
    <div>
      {/* <h1>Hello</h1>
      <Child Checkmessage={chooseMessage} />
      <Testings />
      <UserLogin /> */}
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
