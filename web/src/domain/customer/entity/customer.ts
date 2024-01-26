import Address from "../value-objects/address";

export default class Customer {

    private _id: string;
    private _name: string;
    private _rewardPoints: number;
    private _address: Address;
    private _active: boolean;


    
    constructor(id: string, name:string){
        this._id = id;
        this._name = name;
        this._active = true;
        this._rewardPoints = 0;
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

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    changeAddress(address: Address) {
        this._address = address;
    }

    get id(): string {
        return this._id;
    }
    
    get name(): string {
        return this._name;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    get Address(): Address {
        return this._address;
    }
}