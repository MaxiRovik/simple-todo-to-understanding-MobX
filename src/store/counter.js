import  {makeAutoObservable} from 'mobx';

class Counter {

    constructor(){
        this.baseCount = 2;
        this.count = 0;
        makeAutoObservable(this);
    }



    increment() {
        this.count = this.count +1
        console.log('increment', this.count)
    }
    decrement() {
        this.count = this.count -1
        console.log('decrement', this.count)
    };

    get total() {
        return `Sum ${this.baseCount +  this.count}`
    }


}

export default  new Counter();

