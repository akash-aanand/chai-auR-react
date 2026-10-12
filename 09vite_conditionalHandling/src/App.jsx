import { useState } from "react";

function App() {
  const [IsLoged, setIsLoged] = useState(false);

return (
  <div>
    <div>
      <h2>{IsLoged ? "welcome" : "please login"}</h2>
    </div>
    <button onClick={() => setIsLoged(!IsLoged)}>
      {IsLoged ? "Log out" : "Log in"}
    </button>
  </div>
)};
export default App;
