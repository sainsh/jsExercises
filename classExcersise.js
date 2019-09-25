
let creativeObj = {};
creativeObj.navn = "Karsten";
creativeObj.alder = 43;
creativeObj.boern = ["Lise", "Karl", "Daniel", "soeren"];
creativeObj.sigHej = () => {for(let element of creativeObj.boern){console.log("hej " + element);}}


console.log(creativeObj);
creativeObj.sigHej();

let f = (x) => console.log(x)

let a = f;

a("bob");