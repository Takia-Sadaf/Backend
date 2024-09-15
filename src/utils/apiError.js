class apiError extends Error{
    constructor(
        Statuscode,
        message= "something went wrong",
        errors=[],
        stack ="" 


    ){
       super(message),
       this.Statuscode=Statuscode
       this.data=null
       this.message=message
       this.success=false;
       this.errors=errors

       if(stack){
        this.stack=this.stack
       }else{
        Error.captureStackTrace(this,this.constructor)
       }
       
    }
}
export{apiError}