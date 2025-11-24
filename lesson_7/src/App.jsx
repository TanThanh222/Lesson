import { useState } from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [isSignUp, setSignUp] = useState(true);

  return (
    <>
      {isSignUp ? (
        <SignUp isSignUp={isSignUp} setSignUp={setSignUp} />
      ) : (
        <SignIn isSignUp={isSignUp} setSignUp={setSignUp} />
      )}
    </>
  );
}

export default App;
