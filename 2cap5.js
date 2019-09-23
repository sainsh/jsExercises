console.log("first");

let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(inArray) {


    let outArray = [];
    for (let element of inArray) {

        if (!Array.isArray(element)) {
            outArray.push(element)
        }
        else{
            outArray = outArray.concat(flatten(element))

        }
    }


    return outArray;
}

let resultat = flatten(arrays);

console.log(resultat);

console.log("first end");

console.log("second");

function loop(value, test, update, body){

    
    if(test(value)){
        body(value);
       value = update(value);
       
       loop(value,test,update,body);
    }

}

loop(3, n => n > 0, n => n - 1, console.log);