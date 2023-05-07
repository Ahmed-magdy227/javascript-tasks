function reverse(...args){
    var arr = [].splice.call(args,0);
    var reversed = [];
    for(var i = arr.length-1 ; i>=0 ; i--){
        reversed.push(arr[i]);
    }
    console.log(reversed);
}

function reverse2(...args){
    var reversed = args.reverse();
    console.log(reversed);
}


reverse(1,2,3,4,5);
reverse2(1,2,3,4,5);