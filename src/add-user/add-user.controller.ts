import { Controller, Put, HttpCode } from '@nestjs/common';
import fs                  from "fs" ;
import path                from "path" ;
//
interface IJson {
    [key:string]: string
} ;
//
@Controller('add-user')
export class AddUserController {
    @Put()
    @HttpCode(200)
    async addUser(){
        let userFile:IJson  ;
        try {
            //
            import( "./userFile.json" ) 
                .then((ddd:any)=>{
                    userFile = ddd ;
                    console.log("...userFile: ",userFile,";") ;
                })
        } catch(errFR){
            console.log("...errFR: ",errFR,";") ;
            //@HttpCode(500)
        } ;
        return "++++agrego nose" ;
    }
}
