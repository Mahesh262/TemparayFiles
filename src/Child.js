import React, { useMemo, useState } from "react";

const Child = ({ Checkmessage }) => {
  let message = "Hi";
  const [count, setCount] = useState(0);
  function fct(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * fct(num - 1);
    }
  }
  const facto = useMemo(() => {
    return fct(count);
  }, [count]);
  return (
    <>
      Child
      <div>
        {" "}
        Counter {count}
        factorial {facto}
      </div>
      <button onClick={() => Checkmessage(message)}>OnClick</button>
      <button onClick={() => setCount(count + 1)}>OnClick</button>
    </>
  );
};

export default Child;
