
console.log("second");

function loop(value, test, update, body){

    
    if(test(value)){
        body(value);
       value = update(value);
       
       loop(value,test,update,body);
    }

}

loop(3, n => n > 0, n => n - 1, console.log);

console.log("second end");