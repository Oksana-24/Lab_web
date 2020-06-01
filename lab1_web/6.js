//Написати реалізацію сортування  масиву

const arr = [6, 56, 3, 5, 2, 1, 7,99,156,4,9,10];

function qsort(arr){
    if (arr.length<2){
        return arr;
    }else{
        const pivot=arr[Math.floor(Math.random()*arr.length)];
        const less=arr.filter(value=>value<pivot);
        const greater=arr.filter(value=>value>pivot);
       
        return[...qsort(less),pivot,...qsort(greater)];
    }
    
}
console.log('\n '+qsort(arr));
