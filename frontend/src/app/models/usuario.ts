export class Usuario{

    constructor(_id = '',idempleado='', isActive='', age = 0, name = '',  company='', email='', phone = 0 , address='') {
        this._id = _id;
        this.idempleado = idempleado;
        this.isActive = isActive;
        this.age = age;
        this.name = name;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.address = address
      
    }

    _id: string;
    idempleado:string;
    isActive:string;
    age:number;
    name: string;
    company: string;
    email: string;
    phone: number;
    address: string;
}

