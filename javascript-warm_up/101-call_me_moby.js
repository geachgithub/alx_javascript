
//javascript callback functions
function callMeMoby(number, fun){
    i=0
    while(number>i){
        fun()
        i++
    }
}
module.export=callMeMoby
/*callMeMoby(3,function fun(){
    console.log('c is fun')
    } 
    )*/