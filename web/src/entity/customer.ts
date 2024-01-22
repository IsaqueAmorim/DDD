import Address from "./address";

export default class Customer {

    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean;


    
    constructor(id: string, name:string){
        this._id = id;
        this._name = name;
        this._active = true;
        this.validate();
    }   
    
    validate(){
        if(this._id.length === 0){
            throw new Error("Id is required");
        }
        if(this._name.length === 0){
            throw new Error("Name is required");
        }

    }

    isActive(): boolean{
        return this._active;
    }

    changeName(name: string){
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
    
    get name(): string {
        return this._name;
    }

    public set address(address: Address) {
        this._address = address;
    }

}