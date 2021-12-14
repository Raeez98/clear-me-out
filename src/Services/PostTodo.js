import postData from "./postData"
const PostTodo =(state)=>{

let newTask={
            
    user: "raeez",
    todos:state.map(value=>({text:value,status:true}))         //create seperate function for adding value in database
    
}
    
   postData("http://192.168.1.42:8086/todos",newTask)        //user defined user 
  .then(data=>console.log(data))
}

 export default PostTodo