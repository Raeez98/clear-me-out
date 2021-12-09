// const {createStore}=require("redux")
// console.log( createStore);

// const reducer=(state=[],action)=>{            //to return new function//cant mutate only we can do reset 
//     switch (action.type) {
//         case 'ADD_TODO':
//           return [...state,action.text]
//         default:
//           return state 
// }
// }

// const store = createStore(reducer);      //(reducer["new"]) it performs this method also

// const addTodo=text=>({
//     type: 'ADD_TODO',
//     text
// })
//   store.dispatch(addTodo("Add to do list"));        //to call reducer function
//   store.dispatch(addTodo(""));  
// console.log(store.getState());

const {createStore}=require("redux")
console.log( createStore);
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

    const store=createStore(reducer)
    const unsubscribe=store.subscribe(()=>{      //it is used store value untill 
        console.log(store.getState());
    })
    store.dispatch({
        type:"Increment"
    })
    store.dispatch({
        type:"Decrement"
    })
    unsubscribe()
    store.dispatch({
        type:"Decrement"
    })
    