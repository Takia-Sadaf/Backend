class apiError extends Error{
    constructor(
        Statuscode,
        message= "something went wrong",
        errors=[],
        statck ="" 


    ){
       super(message),
       this.Statuscode=Statuscode
       this.data=null
       this.message=message
       this.success=false;
       this.errors=errors

       if(statck){
        this.stack=this.statck
       }else{
        Error.captureStackTrace(this,this.constructor)
       }
       
    }
}
export{apiError}