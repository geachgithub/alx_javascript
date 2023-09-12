#!/usr/bin/node
class Rectangle{
    width
    height
    constructor(w,h){
        if(w>0 && h>0){
            this.width=w  
            this.height=h
        }
    }       
}
/*r1=new Rectangle(2,9)
console.log(r1)
r2=new Rectangle(2,0)
console.log(r2)
r3=new Rectangle(2,-9)
console.log(r3)*/

module.exports=Rectangle