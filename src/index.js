import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {createStore} from "redux"
import { Provider } from 'react-redux'

const reducer=(state=[],action)=>{            //to return new function//cant mutate only we can do reset //state=0
  switch (action.type) {
      case 'Add_Todo':                    //increment  state + 1;
         return [...state,action.value]                          
       case 'Delete_Todo':
       return state.filter((_val,i)=> i!==action.index)
                                         //   return [...state.sort()];
      default:
        return state

                                           // case 'SORT_TODO':   

  }

}
const store=createStore(reducer);

// const render=()=>{}    pure redux

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
    {/* for react redux */}
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// store.subscribe(render);
// for  pure redux
// render()