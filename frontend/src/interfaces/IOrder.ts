import { EmployeeInterface } from "./IEmployee";
import { MemberInterface } from "./IMember";
import { ProductInterface } from "./IProduct";


export interface OrderInterface {
    ID?: number,
    Quantity?:  number,
	ProductID?: number,
	//Product:   Product,
	CartID?: number,
	//Cart:Cart, 
}