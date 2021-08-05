import  {makeAutoObservable} from 'mobx';

class Counter {

    constructor(){
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

}

export default  new Counter();

