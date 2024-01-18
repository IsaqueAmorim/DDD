class Customer {

    _id: string;
    _name: string;
    _address: string;
    _active: boolean;

    constructor(id: string, name:string,address:string){
        this._id = id;
        this._name = name;
        this._address = address;
        this._active = true
    }

    validate(){
        if(this._id.length === 0){
            throw new Error("Id is Required")
        }
        if(this._name.length === 0){
            throw new Error("Name is Required")
        }

    }

    changeName(id: string,name: string){
        this._name = name;
    }

    active(){
        this._active = true;
    }

    deactive(){
        this._active = false;
    }
}