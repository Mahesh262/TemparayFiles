// // import logo from "./logo.svg";
// import React, { useEffect, useState } from "react";
// import Header from "./Dashboard/Header";
// import "./App.scss";
// // import axios from "axios";
// import Child from "./Child";
// import UserLogin from "./Forms/UserLogin";
// import Testings from "./Testings";
// import { Container } from "react-bootstrap";
// function App() {
//   const [movies, setMovies] = useState([]);
//   const [message, setMessage] = React.useState("Hello World");
//   const chooseMessage = (message) => {
//     setMessage(message);
//   };
//   console.log(message);
//   // const loadpost = async () => {
//   //   let response = await axios.post("https://hoblist.com/api/movieList", {
//   //     category: "movies",
//   //     language: "kannada",
//   //     genre: "all",
//   //     sort: "voting",
//   //   });
//   //   setMovies(response.data);

//   //   // let response = await axios.get(
//   //   //   // "https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1"
//   //   //   // {
//   //   //   //   headers: {
//   //   //   //     "X-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
//   //   //   //     "X-tenant-key": "DIVANOR123",
//   //   //   //   },
//   //   //   // }
//   //   // );
//   //   setMovies(response.data);
//   // };
//   // console.log(movies);

//   // const [data, setData] = useState(null);

//   // useEffect(() => {
//   //   axios
//   //     .get(
//   //       "https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
//   //       {
//   //         headers: {
//   //           Authorization: "Bearer ",
//   //           "X-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
//   //           "X-tenant-key": "DIVANOR123",
//   //           "Content-Type": "application/json",
//   //         },
//   //       }
//   //     )
//   //     .then((response) => setData(response.data))
//   //     .catch((error) => console.error(error));
//   // }, []);

//   // console.log(data);

//   // useEffect(() => {
//   //   loadpost();
//   // }, []);

//   return (
//     <div>
//       {/* <h1>Hello</h1>
//       <Child Checkmessage={chooseMessage} />
//       <Testings />
//       <UserLogin /> */}
//       <div>
//         <Header />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [color, setColor] = useState(getRandomColor());

//   function handleClick() {
//     setColor(getRandomColor());
//   }

//   function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   return (
//     <div
//       style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}
//       onClick={handleClick}
//     >
//       <h1>Random Color Display</h1>
//       <p>Click to change the color!</p>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";

// function App() {
//   const [color, setColor] = useState("#FFFFFF");

//   useEffect(() => {
//     fetch("https://www.colr.org/json/color/random")
//       .then((response) => response.json())
//       .then((data) => setColor("#" + data.colors[0].hex));
//   }, []);

//   function handleClick() {
//     fetch("https://www.colr.org/json/color/random")
//       .then((response) => response.json())
//       .then((data) => setColor("#" + data.colors[0].hex));
//   }

//   const random = [1, 2, 3, 4, 5, 6, 7, 9];
//   var item = random[Math.floor(Math.random() * random.length)];
//   console.log(item);

//   return (
//     <div
//       style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}
//       onClick={handleClick}
//     >
//       <h1>Random Color Display</h1>
//       <p>Click to change the color!</p>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Movies from "./Dashboard/ReduxApiCalls/Movies";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "red" },
    { id: 2, name: "blue" },
    { id: 3, name: "green" },
    { id: 4, name: "yellow" },
  ]);
  const [randomNumber, setRandomNumber] = useState(null);

  function handleClick() {
    const start = performance.now();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomObject = data[randomIndex];
    const randomId = randomObject.name;
    setRandomNumber(randomId);

    const end = performance.now();
    console.log(`${end - start}TimeStamp`);
  }

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Generate Random Number</button>
      {randomNumber && (
        <div style={{ backgroundColor: randomNumber, height: "300px" }}>
          <Movies />
        </div>
      )}
    </div>
  );
}

export default App;
