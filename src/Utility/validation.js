export const isvalidEmail= (inputText)=>{

    if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(inputText))  //for testing email
    {
        return(true)
    }
    return(false)
    
}
