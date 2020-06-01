class Shop {
    constructor(number, name,goods ){
        this.number = number;
        this.name = name;
        this.goods=goods;
    }
}

class Good {
    constructor(number, name, price) {
        this.number = number;
        this.name = name;
        this.price = price;
    }
}

class Storage {
    constructor(number, name, good) {
        this.number = number;
        this.name = name;
        this.good = good;
    }

    info() {
        console.log(this)
    }
}
class goodsInStock {
    constructor(number, name, quantity) {
        this.number = number;
        this.name = name;
        this.quantity = quantity;
    }
}

let shops=[
    new Shop(1,'Y',200),new Shop(2,'I',250),new Shop(3,'O',260),
    new Shop(4,'R',270),new Shop(5,'K',90),new Shop(7,'D',800)
]
let goods=[
    new Good(1,'gd1',35),new Good(2,'gd2',24),new Good(3,'gd3',19),
    new Good(4,'gd4',48),new Good(5,'gd5',55),new Good(6,'gd6',67)
]
let storages=[
    new Storage(1,'st1',3000),new Storage(2,'st2',2000),new Storage(3,'st3',1000),
    new Storage(4,'st4',4000),new Storage(5,'st5',3500),new Storage(6,'st6',6000)
]

let goodsInStocks=[
    new goodsInStock(15,'#1',300),new goodsInStock(23,'#2',200),new goodsInStock(13,'#3',100),
    new goodsInStock(41,'#4',400),new goodsInStock(50,'#5',350),new goodsInStock(16,'#6',600)
]

//додавання нового магазину
let newShop= new Shop(Math.round(Math.random()*10),"New Shop",undefined);
console.log('\nДодавання нового магазину:\n');
console.log(shops);

let addNewShop=(newPassenger)=>{
    shops.push(newShop);
};
addNewShop(newShop);
console.log(shops);

//Редагування магазину в колекції
console.log('\nРедагування магазину в колекції:');

let edditShopClass=()=>{
    let editedShop
    shops.forEach((value,index)=>{
        if(
            value.number===4){editedShop=value;
            value.goods+=" edited";}
        
    });
    console.log(`Пасажир №: ${editedShop.number}, ${editedShop.name}, кількість товару ${editedShop.goods}`)
    console.log(shops);
};
edditShopClass();

//Видалення магазину з колекції
console.log('\ВВидалення першого магазину:');
//console.log(shops);
let deleteShop=(shops)=>{
    shops.shift();
};
deleteShop(shops);
console.log(shops);

//Пошук одного магазину в колекції
console.log('\nПошук одного магазину в колекції:');
let findShop = shops.find(value => {
    return value.name = 'O'
});
console.log(findShop);

//Додавання товару в колекцію
console.log('\nДодавання товару в колекцію:');

//console.log(goods);
goods.push(new Good(Math.round(Math.random()*999), "NewGood", undefined));
console.log(goods);

//Редагування товару в колекції
console.log('\nРедагування товару в колекції:');

let editGoodClass=()=>{
    let renameGood
    goods.forEach((value,index)=>{
        if(
            value.number===1){renameGood=value;
            value.name+=" renamed";}
   });
    console.log(goods);
};
editGoodClass();

//Видалення товару з колекції
console.log('\nВидалення першого товару:');
//console.log(goods);
let deleteGood=(goods)=>{
    goods.shift();
};
deleteGood(goods);
console.log(goods);

//Пошук одного товару в колекції
console.log('\nПошук одного товару в колекції:');
let findGood = goods.find(value => {
    return value.name = 'gd3'
});
console.log(findGood);
 
//Додавання складу в колекцію
let newStorage= new Storage(Math.round(Math.random()*10),"New Storage",undefined);
console.log('\nДодавання нового складу:\n');
//console.log(storages);

let addNewStorage=(newStorage)=>{
    storages.push(newStorage);
};
addNewStorage(newStorage);
console.log(storages);

//Редагування складу в колекції
console.log('\nРедагування складу в колекції:');

let editStorageClass=()=>{
    let renameStorage
    storages.forEach((value,index)=>{
        if(
            value.number===1){renameGood=value;
            value.name+=" renamed";}
   });
    console.log(storages);
};
editStorageClass();

//Видалення складу з колекції
console.log('\nВидалення першого складу:');
//console.log(storages);
let deleteStorage=(storages)=>{
    storages.shift();
};
deleteStorage(storages);
console.log(storages);

//Пошук складу в колекції
console.log('\nПошук складу в колекції:');
let findStorage = storages.find(value => {
    return value.name = 'st34'
});
console.log(findStorage);

//Доставка товару на склад
let newgoodsInStock= new goodsInStock(Math.round(Math.random()*10),"New goodsInStock",undefined);
console.log('\nДодавання товару на склад:\n');
//console.log(goodsInStocks);

let addNewgoodsInStock=(goodsInStock)=>{
    goodsInStocks.push(newgoodsInStock);
};
addNewgoodsInStock(newgoodsInStock);
console.log(goodsInStocks);

//Видалення товару зі складy
console.log('\nВидалення товару зі складy:');
//console.log(goodsInStocks);
let deletegoodsInStock=(goodsInStocks)=>{
    goodsInStocks.shift();
};
deletegoodsInStock(goodsInStocks);
console.log(goodsInStocks);

//Трансфер товару із складу на склад
console.log('\nТрансфер товару із одного складу на інший');
let changeStorage = goodsInStocks.find(value => {
    return value.quantity === 400
});
console.log(goodsInStocks);

changeStorage.quantity= goodsInStocks[Math.round(Math.random()*goodsInStocks.length-1)].quantity;

console.log(goodsInStocks);

//Відвантаження товару в магазин із складу