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

// Home page //Category Page //Question page

//Login

//Sign up page

//Ask Questions

//Post Answer

//Feedback

function App() {
  return (
    <div className="App">
      <header>
      <h1>Header</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="category" element={<Category/>}/>
        <Route path="question" element={<Question/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="ask" element={<Ask/>}/>
        <Route path="post" element={<Post/>}/>
        <Route path="feedback" element={<Feedback/>}/>
    
        

      </Routes>
    </div>
  );
}

export default App;
