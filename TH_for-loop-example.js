function geeks(){
    console.log("for(;;)");
    for(let i = 0; i <= 10; i+=2){
        console.log(`${i}`);
    }
}

geeks();


console.log("for ... of");
for(let i of ['Ha Noi', 20.32, 3000]){
    console.log(`${i}`);
}

let obj = {name: "Dong", age: "27", salary: "3000"};
for(let i in obj){
    console.log(`${obj[i]}`);
}