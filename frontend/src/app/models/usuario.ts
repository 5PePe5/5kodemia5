export class Usuario{

    constructor(_id = '', isActive='', age = 0, name = '',  company='', email='', phone = 0, address='') {
        this._id = _id;
        this.isActive = isActive;
        this.age = age;
        this.name = name;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.address = address
      
    }

    _id: string;
    isActive:string;
    age:number;
    name: string;
    company: string;
    email: string;
    phone: number;
    address: string;
}

