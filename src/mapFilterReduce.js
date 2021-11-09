//üçü de iterate edilebilen yapılara uygulanır.

let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 1, productName: "Bardak", quantity: 2, unitPrice: 30 },
  { id: 1, productName: "Kalem", quantity: 1, unitPrice: 20 },
  { id: 1, productName: "Şarj Aleti", quantity: 2, unitPrice: 100 },
  { id: 1, productName: "Kitap", quantity: 3, unitPrice: 30 },
  { id: 1, productName: "Pot", quantity: 5, unitPrice: 150 },
];

//State Management

  //.map() array i tek tek dolaşıyor ve talebe göre yeni bir array veriyor. tek tek gezerken her bir elemana bir  takma isim veriliyor. (burada takma isim product)
  cart.map(product=>{
      //birden fazla satır.
      console.log(product.productName+" : "+product.unitPrice * product.quantity)
  })

  //.filter() filtrelemeye yarar. Yine çoğunlukla yeni bir array oluştmak için kullanılır.
  let quantityOver2 = cart.filter(product =>product.quantity>2)
  console.log(quantityOver2)

  //.reduce() toplam değeri gstermeye yarar nispeten az kullanılır.  sondaki sıfır toplamaya  kaçtan başlayım yani acc nin ilk değeri
  let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity,0)
  console.log("Toplam Tutar: "+total)


function addToCart(sepet) {
  sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 });
}

addToCart(cart);
console.log(cart); //referans tip

let sayi = 10;
function sayiTopla(number) {
  number += 1;  
}
sayiTopla(sayi);
console.log(sayi); // değer tip
