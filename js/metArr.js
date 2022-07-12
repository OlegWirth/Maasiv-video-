


let fruits = ['Яблоко', 'Груша' , 'Слива'];
console.log(fruits);

//push добавляем новый эл в конец массива

fruits.push('Апельсин');
console.log(fruits);

//unshift добавляем новый эл в начало массива

fruits.unshift('Персик');
console.log(fruits);

//pop -удаление последнего элемента

fruits.pop();
console.log(fruits);

//shift удаление первого элемента

fruits.shift();
console.log(fruits);

//pop shift--- при удалении элементы возращаются

let popElem = fruits.pop(),
    shiftElem = fruits.shift();
    console.log(fruits);
    console.log(popElem);
    console.log(shiftElem);  
    
//push unshift ---могут добавлять несколько значений

fruits.push('Ананас', 'Мандарин');
console.log(fruits);
fruits.unshift('Вишня', 'Клубника');
console.log(fruits);

//splice умеет удалять, вставлять и заменять

let arr = ['Я', 'изучаю', 'JavaScript'];
console.log(arr);

arr.splice(1 , 1);//принимает 2 значения(1-с какого значения начинаем  сколько эл. удаляем  )
console.log(arr);

arr.splice(1 , 0, 'изучаю');
console.log(arr);

arr.splice(2 , 0, 'сложный', ' язык');
console.log(arr);

arr.splice(2 , 2);
console.log(arr);

//slice копирует участки массива в другой массив

let arr2 = ['Почему', 'нужно', 'учить', 'JavaScript?'];
let arr22 = arr2.slice(1, 3);//указать сколько элементов копировать и с какого индекса
//начиная с первого индекса и до третьего (не включая 3
console.log(arr22);

let arr23 = arr2.slice(1);//копируем с первого индекса и до конца
console.log(arr23);

let arr24 = arr2.slice();//копируем весь массив 2 способа
console.log(arr24);
let arr2Copy = arr2;//рекомендуется
console.log(arr2Copy);

// split  превращает строку в массив

let names = 'Маша, Petia, Ivan, Marina';
let namesArr = names.split(',');
console.log(namesArr);

namesArr = names.split(',', 2);// копируем 2 элемента списка в массив
console.log(namesArr);
 let txt = 'Строка';
 console.log(txt.split(''));

 //--- JOIN ---  преобразует массив в строку

let arrName = ['Маша', ' Petia', ' Ivan', ' Marina'];
let strName = arrName.join(', ');
console.log(strName);

//---  join для создания повторений строки

console.log(new Array(10).join('Laaa'));

// Sort --сортирует значения

let arrNums = [3, 2 , -8, 25, 0];
console.log(arrNums);
arrNums.sort();//сортирует элементы массива как строки
console.log(arrNums);

arrNums.sort(function(a ,b){
    return a - b;
});//сортирует элементы массива 
console.log(arrNums);


// reverse --- меняет порядок элементов в массиве на обратный

arrNums.reverse();
console.log(arrNums);

//--concat-- объединяет или копирует

let arrNums2 = [1,2,3,4,5,6],
    arrNums3 = [6, 7, 8, 9],
    arrNums4 = [10, 11, 12, 13, 14];
let arrNums5 = arrNums2.concat(arrNums3, arrNums4);
console.log(arrNums5);

// indexOf --Поиск значений в массиве слева направо
//- lastIndexOf ---- Поиск значений в массиве справа налево
//несуществующее имя выводит  -1

let newArrName = ['Маша', 'Petia', ' Ivan', ' Marina', 'Olga', 'Sveta'];
console.log(newArrName);

console.log(newArrName.indexOf('Olga'));
console.log(newArrName.lastIndexOf('Olga'));

