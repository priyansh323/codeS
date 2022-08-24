

class abc{

    constructor(prop1, prop2){
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
     abc1(){
        console.log('x',this.prop1, this.prop2);
     }

     abc2(){
        console.log('y', this.prop1,this.prop2)
     }
}
 
let obj1 = new abc('x','y')
console.log(obj1.abc1());

let obj2 = new abc('pq','rs')
console.log(obj2.abc2());