import {observable,action,computed} from "mobx";

export default class {
    @observable name="苹果";
    @observable price=18;
    @observable num=0;

    @action.bound add(){
        this.num++;
        console.log(this);
    }
    @computed get countPrice(){
        return this.num*this.price;
    }
}