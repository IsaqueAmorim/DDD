import Address from "./address";

class Customer {

    _id: string;
    _name: string;
    _address!: Address;
    _active: boolean;


    public set address(address: Address) {
        this._address = address;
    }

    constructor(id: string, name:string,address:string){
        this._id = id;
        this._name = name;
        this._active = true;
        this.validate();
    }

    validate(){
        if(this._id.length === 0){
            throw new Error("Id is Required");
        }
        if(this._name.length === 0){
            throw new Error("Name is Required");
        }

    }

    changeName(id: string,name: string){
        this._name = name;
        this.validate();
    }

    active(){
        if(this._address === undefined){
            throw new Error("Address is mandatory to activate a customer");
        }

        this._active = true;
        this.validate();
    }

    deactive(){
        this._active = false;
        this.validate();
    }
    
}