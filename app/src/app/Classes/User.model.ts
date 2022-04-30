import { image } from "./image";

export class User {
    public _id?:String;
    public fullName?:String;
    public image?:image['filename']
    public email?:String;
    public password?:String;
    public Roles?:String;
    
}