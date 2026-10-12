import React from "react";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e){
e.preventDefault();
        alert(`Welcome, ${username}! Your email is ${email}!`);

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          placeholder="Write user name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type="email"
          value={email}
          placeholder="email@xx.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;
