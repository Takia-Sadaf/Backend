class apiResponse{
    constructor(Statuscode,message,data="success"){
    this.Statuscode=Statuscode
    this.message=message
    this.data=data
    this.success=Statuscode <400
    }

}