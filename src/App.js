import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(12);
  const [users, setUsers] = useState([
    { name: "ali", last: "ansari", age: 13 },
    { name: "hossein", last: "ansari", age: 23 },
    { name: "amir", last: "ansari", age: 58 },
  ]);

  const up = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const down = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };
  const remove = (name) => {
      setUsers((prevUser) => {
      let newUsers=prevUser.filter((user) => {
        return user.name !== name;
      });
      return newUsers
    });
  };
  return (
    <div>
      <button onClick={up}>+</button>
      <h1>{count}</h1>
      <button onClick={down}>-</button>
      {users.map((user) => (
        <li>
          {user.name} {user.last}{" "}
          <button onClick={() => remove(user.name)}>-</button>
        </li>
      ))}
    </div>
  );
}
