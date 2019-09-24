console.log("first");

let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(inArray) {
 
    return inArray.reduce((flat,current) => flat.concat(current), []);
}

let resultat = flatten(arrays);

console.log(resultat);

console.log("first end");