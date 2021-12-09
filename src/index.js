import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {createStore} from "redux"

const reducer=(state=[],action)=>{            //to return new function//cant mutate only we can do reset //state=0
  switch (action.type) {
      case 'ADD_TODO':                    //increment
        return [...state,action.value];
        
      case 'DELETE_TODO':
        return   state.filter((_value,index)=>action.index!==index)

        case 'SORT_TODO':
          return [...state.sort()];
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