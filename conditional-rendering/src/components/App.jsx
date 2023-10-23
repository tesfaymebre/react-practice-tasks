import React from "react";
import Login from "./Login";

let isLoggedIn = false;

function conditionalRender(){
  if (isLoggedIn){
    return (
    <h1>Hello</h1>
    );
  }else{
    return (
      <Login />
    );
  }
}

function App() {
  return (
    <div className="container">
    {conditionalRender()}
    </div>
  );
}

export default App;
