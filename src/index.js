import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {createStore} from "redux"
import { Provider } from 'react-redux'
import PostTodo from './Services/PostTodo';


const reducer=(state=
  {
  todos:[],
  counter: 0,
  isLoggedIn:false

},
  action)=>{   
 //to return new function//cant mutate only we can do reset //state=0
  let updatedList;
  switch (action.type) {
      case 'Add_Todo':                             //increment  state + 1;
      updatedList=[...state.todos,action.value]
      PostTodo(updatedList)
         return{
           ...state,
        todos:updatedList
         };
                               
       case 'Delete_Todo':
       updatedList=state.todos.filter((_val,i)=> i!==action.index)
       PostTodo(updatedList)
         return{
          ...state,
       todos:updatedList
        };   
       //   return [...state.sort()];
       case 'create':
         return {
         ...state,
         todos:action.data
        };
         case "Increment":
           return{
             ...state,
             counter:state.counter+1
           };
           case "Decrement":
             return{
               ...state,
               counter:state.counter-1
             };
      case "LoggedIn":
               return{
                 ...state,
                 isLoggedIn:true
               }
        case "LogOut":
          return{
            ...state,
            isLoggedIn:false
          }      



      default:
        return state

                                                        
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