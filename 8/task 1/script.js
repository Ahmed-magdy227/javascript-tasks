function test(a,b){
    try{
        if(arguments.length === 2){
            alert ("you entered valid arguments")
        }else{
            var err = new Error()
            throw err;
        }
    }
    catch(err){
        alert("you must enter two arguments ")
    }
}

test(1,2,3)
test(1,2)
test (1);