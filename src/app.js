console.log("Merhaba Kodlama.io")

//JS type safe değildir!!!
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun="9.20" //bunu yapmak js de mümkün. VS Code muhtemelen eklentilerden ötürü beni uyarıyor ama bu JS için bir hata değil kod çalışıyor.

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 //const sabit değerdir. böyle bir atanma yapılamaz.
console.log(euroDun)

//array - dizi
//değişken isimlendirmelerinde camelCase kullanılır.
//PascalCase
let konutKredileri = ["Konut Kredisi","Emlak Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"] //tek veya çift tırnak fark etmiyor javascript de.

console.log(konutKredileri)

let ornekDizi = [12,"Emlak Kredisi",["a","b","c"]] //bu bile mümkün

console.log("<ul>")
for(let i = 0; i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")


