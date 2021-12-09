import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {createStore} from "redux"

const reducer=(state=0,action)=>{            //to return new function//cant mutate only we can do reset 
  switch (action.type) {
      case 'Increment':
        return state+1
        
      case 'Decrement':
        return  state-1
      
      default:
          return state

  }

}
const store=createStore(reducer);

const render=()=>{
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App store={store}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}

store.subscribe(render);

render()