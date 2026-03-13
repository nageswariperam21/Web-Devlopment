function addfruit(fruits,newfruit){
fruits.push(newfruit);
return fruits;
}
let fruitlist=["APPLE","grapes","mango"]
console.log(addfruit(fruitlist,"orange"));