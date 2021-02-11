console.log("hello");
// let names:string ="hello world";
// console.log(names);

function add (num1:number , num2:number){
    return num1 + num2;
    
    // return num1 + num2;
}
let v = add(1,2);
// let x= add ('adam', 'sand');
console.log(v);

function doubleIt (num:number): void{
    const result = num*2;
    console.log(result);
}
doubleIt(10);

const mul = (x:number,y:number):number => x*y; 
console.log(mul(20,25));



const numbers:number [] =[2,3,4,5];
numbers.push(22);

let megaName:string ='';
const friends:string[] =['alaba','alsaka'];
for (let i=0; i< friends.length; i++){
    const element:string = friends[i];
    if(friends.length>megaName.length){
        megaName = element;
    }
}
console.log(megaName);
object

const names = {
    name: 'samuel',
    age:13
}

names.name= 'Abudhabi';
// names.name= 66;

const names: {
    name: string;
    age: number;
} ={
    name:'alaba',
    age: 12
}
console.log(names);

