
let fruits = ['Яблоко', 'Груша' , 'Слива'];
console.log(fruits);
console.log(fruits.length);

for(let i=0; i < fruits.length; i++){
    console.log(fruits[i]);//перебор слева на право 
    document.write(fruits[i]);
}

for(let i=fruits.length-1; i >= 0; i--){
    console.log(fruits[i]);//перебор справа налево
    document.write(fruits[i]);
}
let i =0;
while(i < fruits.length) {
    console.log(fruits[i]);
    document.write(fruits[i]);
    i ++;
}
//заполнение массива числами

let arr = [];
for(let i = 8; i <= 20; i ++) {
    arr.push(i);
}
console.log(arr);




















