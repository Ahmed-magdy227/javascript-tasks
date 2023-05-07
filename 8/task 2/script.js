var result = 0;
function sum(...args){
    try{
    for(var arg of args){
            if(typeof arg !== 'number' ){
                var err= new Error;
                throw err;
            }else{
                result+=arg;
            }
        }
    console.log(result);

    }catch(err){
        console.log("you must enter numbers only");
    }
}

sum(3,4,5);