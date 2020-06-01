//Написати функцію, яка видалить усі дублі із масиву стрічок

var arr = [1, 2, 3, 1, 2, 3, 5,5,8,8];
var newArr = arr.sort().reduce(function(arr, el){
    if(!arr.length || arr.length && arr[arr.length - 1] != el) {
        arr.push(el);
    }
    return arr;
}, []);
console.log( newArr );
