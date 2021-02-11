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