
const myObject = {
    type: 'object',
    value: 12
  };
const incr=()=>{
    myObject.value=myObject.value+1
    console.log(myObject.value)
}
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);