import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);
  const [Isloading, setIsloading] = useState(true);
  const [error,setError]= useState('');

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) {
          throw new Error("fetching is failed");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError("Fail to fetch post.");
        console.log("error");
      }
      setIsloading(false);
    }
    fetchUser();
  }, []);
  if (Isloading) {
    return <h2>loading....</h2>;
  }
  if (error) {
    return <h4>{error}</h4>;
  }
  return (
    <div>
       <h2>User:</h2>
      {user.map((data) => {return(
        <div key={data.id}>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>);
      })}
    </div>
  );
};

export default App;
