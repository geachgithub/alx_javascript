
//javascript callback functions
const callMeMoby=(number, fun)=>{
    i=0
    while(number>i){
        fun()
        i++
    }
}
module.exports=callMeMoby
/*callMeMoby(3,function fun(){
    console.log('c is fun')
    } 
    )*/