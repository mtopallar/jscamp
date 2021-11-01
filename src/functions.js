function addToCart(quantity, productName = "Elma") {
  console.log("Sepete eklendi, ürün : " + productName + ", adet : " + quantity);
}

// addToCart()
addToCart(10);
// addToCart(15)

let sayHello = () => {
  //tek satır ise süslü paranteze gerek yok.
  //değişkene fonksiyon tanımladık
  console.log("Hello World!");
};
sayHello();

let sayHello2 = function () {
  //yine değişkene fonksiyon atadık.
  console.log("Hello World 2");
};
sayHello2();

function addToCart2(productName, quantity, unitPrice) {}

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };

function addToCart3(product) {
  console.log("Ürün : " + product.productName);
  console.log("Adet : " + product.quantity);
  console.log("Fiyat : " + product.unitPrice);
}

addToCart3(product1);

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 };
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName) //referans tip

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2 = 100
console.log(sayi1) //değer tip

function addToCart4(x) {
    //imzada products yoksa bir üst scope dakine erişir. varsa parametre olana erişir.
   console.log(products) 
}

let products = [
    {productName: "Elma", unitPrice: 10, quantity: 5},
    {productName: "Armut", unitPrice: 10, quantity: 5},
    {productName: "Karpuz", unitPrice: 10, quantity: 5}
]
addToCart4(products)

function add1(number1, number2) {
    console.log(number1+number2)
}

//add(20, 30)

function add2(number1, number2, number3) {
    console.log(number1+number2+number3)
}

function add3(number1, number2,number3,number4) {
    console.log(number1+number2+number3+number4)
}
//-----------------------REST------------------------------------
//...rest operatörü gelen değişkenleri array formatına çevirir. örnekte array in adı numbers dır. rest parametresini metod parametrelerinde en sona yaz. çünkü gelen tüm değerleri rest operatörü üzerine almaya çalışacaktır.
function add(...numbers) {
    let total = 0;
    //console.log(numbers)
    for (let i = 0; i < numbers.length; i++) {
        total = total+numbers[i]
        
    }
    console.log(total)
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

//--------------------------SPREAD--------------------------------
let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers)) //array i ...numbers ile ayırıyoruz SPREAD
//.max e array gönderirsen çalışmaz açık bir şekilde göndermen gerekiyor. onun için de spread etmen gerekiyor.

//------------------------DESTRUCTING------------------------------

//arraylerde destructing
let [icAnadolu, marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadoluSehirleri)
//icAnadoluSehirlerini destruct etmezsek Ankara Konya İstanbul Bursa Sinop Trabzon hepsini alır ama kçşeli parantez ile destruct edersek ilk array olan iç anadolu şehirlerini alır.


// objelerde destructing
let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName: "Elma", unitPrice: 10, quantity: 5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

//productName i newProductName e, unitPrice ı newUnitPrice a quantity yi newQuantity e ata.