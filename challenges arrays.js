 //hunt practice - is there any way or keyvoard shortcut in the VS code where i can actually have these multiline comments  being added or removed in one go?
 //_________________________________________________________________________
 
 const teaFlavour = ["green tea", "black tea", "oolong tea"];

 let firstTea = console.log(teaFlavour[0]);
 //_________________________________________________________________________
 
 // another way :-

//  const flvour= new array("green tea", "black tea", "oolong tea");
// _________________________________________________________________________

const cities =["London", "Tokoyo","Paris","New York"];
let favourCiti= console.log(cities[2]);
//_________________________________________________________________________

const teaTypes =["herbal tea","white tea","masala chai"];
teaTypes[1] ="jasmine tea";
console.log(teaTypes);

// we can change the value of the array by using the index of the array via const keyword as well
//_________________________________________________________________________

const citiesVisit = ["mumbai", "sydney" ];
//for adding new element to the array use push keyword
citiesVisit.push("berlin");
console.log(citiesVisit.length);
// another way to add element to the array is

citiesVisit[3]="kolkalta";

//another way to add element to the array is
citiesVisit[citiesVisit.length] = "delhi";
//how this work - citiesVisit[cityVisit.length] = "delhi" - here cityVisit.length will return 4 and then it will add delhi to the 4th index of the array
console.log(citiesVisit);


//_________________________________________________________________________

//pop method 

const teaOrders = ["chai","ice tea","matcha","early grey"];
console.log(teaOrders);
teaOrders.pop();// this will remove the last element from the array
var lastOrder = teaOrders;
console.log(lastOrder);
//_________________________________________________________________________

//soft copy in js
//soft copy is when we assign the value of one variable to another variable
//here we are not copying the value of the variable but we are copying the reference of the variable
//but in variable we can't update the value of the variable from which we have copied the value of the variable memory refrence  will be defferent
//but in object and array we can update the value of the object from which we have copied the value of the object memory refrence will be same

// variable example
let var1=3;
let var2=var1;// here var1 assigned to var2
//beacuse of this var2 will have the value of var1
var1=5;
console.log(var2);

//soft copy mean we are copying the reference of the memory location of the data
let popularTeas = ["green tea","oolong tea","chai"];
let softCopyteas = popularTeas; // here we are copying the reference of the popularTeas array to the softCopyteas array
console.log(softCopyteas);
popularTeas.pop();
console.log(softCopyteas);//chai` will be removed from the softCopyteas array as well why because we are copying the reference of the popularTeas array to the softCopyteas array
console.log(popularTeas);
//behinde the scene

//arrar memory location when we create the array like softCopyteas = popularTeas will share same memory location so we change the value of the popularTeas array it will change the value of the softCopyteas array as well

// hardcopy in js;
let topCities = ["berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];// here we are copying the value of the topCities array to the hardCopyCities array now both the array will have the different memory location so if we change the value of the topCities array it will not change the value of the hardCopyCities array

topCities.pop();
console.log(hardCopyCities);
console.log(topCities);
// merge

const europenCities=["Paris","LOndon","berlin"];
let  asiancities =["tokyo","mumbai","singapore","beijing"];
// var worldCities = europenCities+" "+asiancities;//here are not merging the two arrays we are just adding the two arrays as a string
let worldCities = europenCities.concat(asiancities);//here we are merging the two arrays
console.log(worldCities);
console.log(typeof (worldCities));

//_________________________________________________________________________

let teaMenu =["masala chai","oolong tea","green tea","early grey"];
let menuLength = teaMenu.length;
console.log(menuLength);
//_________________________________________________________________________

let citiesBucketList=["kyoto","London","Cape Town","Vancouver"];
let isLondonInList=citiesBucketList.includes("London");
console.log(isLondonInList);
//include method will return true if the value is present in the array
//include case sensitive

console.log(isLondonInList);

//if you want to more info just go on include press cntrl+ click on the include it will take you to the mdn docs