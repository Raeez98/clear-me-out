import {Route,Routes} from "react-router-dom"

import './App.css';

import Home from  "./Routes/Home"
import Category from './Routes/Category';
import Question from './Routes/Question';
import Login from './Routes/Login';
import Signup from './Routes/Signup';
import Ask from './Routes/Ask';
import Post from './Routes/Post';
import Feedback from './Routes/Feedback';
import Layout from "./Layout";
import Demo from "./Learn/Demo";
import Raeez from "./Raeez/Raeez";
import Answer from "./Routes/Answer"
import Counter from "./Counter";

// Home page //Category Page //Question page

//Login

//Sign up page

//Ask Questions

//Post Answer

//Feedback

function App({store}) {
  return (
     <Routes>
        <Route path="" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="category/:title" element={<Category/>}/>
        <Route path="question" element={<Question/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="ask" element={<Ask/>}/>
        <Route path="post" element={<Post/>}/>
        <Route path="feedback" element={<Feedback/>}/>
        <Route path="demo" element={<Demo/>}/>
        <Route path="raeez" element={<Raeez/>}/>
        <Route path="answer" element={<Answer/>}/>
        <Route path="counter" element={<Counter store={store}/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
