import { EmployeeInterface } from "./IEmployee";
import { MemberInterface } from "./IMember";


export interface CartInterface {
  EmployeeID?: number;
  Employee?: EmployeeInterface;
  MemberID?: number;
  Telephone?: string;
  Member?: MemberInterface;
  
  
}