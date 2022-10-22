export interface MemberInterface {
    ID?: number,
    FirstName?: string,
	LastName?:  string,
	Age?: number,

	GenderID?: number,
	//Gender:   Gender, 

	Date_Of_Birth?: Date | null;	

	ProvinceID?: number,
	//Province:   Province, 

	Telephone?: string,

	EmployeeID?: number,
	//Employee:   Employee,
}