
import { pdf } from './pdf';
import { subject } from './subject';
import { td } from './td';
export class lisson{
      public _id?:string;
      public title?:string;
      public blogs?:Array<subject>;
      public module?:string;
      public tds?:Array<td>;
      public pdfs?:Array<pdf>
      
}