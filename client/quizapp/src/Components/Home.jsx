import React from "react";
import { useRef } from "react";
import {Link} from "react-router-dom"

const Home=()=> {
  const userRef=useRef(null)
  const passwordRef=useRef(null)
  return (
    <div className="home">
      <h1>Quiz </h1>
      <p>Instructions</p>
      <ol>
        <li>There are 10 multiple choise questions and you have to chose only one.</li>
        <li>There is next button to navigate to next question</li>
        <li>Your result will show just after you complete the test.</li>
      </ol>
      <form>
        <input ref={userRef} type="text" placeholder="Userame"/>
        <input ref={passwordRef} type="text" placeholder="password"/>
      </form>
      <div><Link to={"quiz"}>Start</Link></div>
    </div>
  );
}

export default Home;
