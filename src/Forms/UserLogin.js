import React, { useState } from "react";

const UserLogin = () => {
  const [log, setLogin] = useState({
    name: "",
    email: "",
  });
  const { name, email } = log;
  const handlechnager = (e) => {
    setLogin({ ...log, [e.target.name]: e.target.value });
  };
  const submithandler = (e) => {
    e.preventDefault();
    console.log(log);
  };
  return (
    <>
      <form onSubmit={submithandler}>
        <label>UserName</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handlechnager}
          placeholder="UserName"
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={handlechnager}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserLogin;
