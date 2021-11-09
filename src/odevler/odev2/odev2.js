//Asal Sayı Kontrol -1-
function asalKontrol(...params) {
  var sayac = 0;
  let [sayilar] = [params];

  sayilar.forEach((element) => {
    if (element === 0 || element === 1) {
      sayac++;
    }
    for (let i = 2; i < element; i++) {
      if (element % i == 0) {
        sayac++;
      }
    }
    if (sayac == 0) {
      console.log(element + " Asal");
    } else {
      console.log(element + " Asal değil");
    }
    sayac = 0;
  });
}
//asalKontrol(1,2,3,4,5,6,7,8,9,11,18,27,56);

//Arkadaş sayılar -2-
let kontrol1 = 0;
let kontrol2 = 0;
function arkadasKontrol(sayi1, sayi2) {
  for (let i = 0; i < sayi1; i++) {
    if (sayi1 % i == 0) {
      kontrol1 += i;
      //console.log(sayi1)
    }
  }
  for (let j = 0; j < sayi2; j++) {
    if (sayi2 % j == 0) {
      kontrol2 += j;
    }
  }

  if (kontrol1 === sayi2 && kontrol2 === sayi1) {
    console.log(sayi1 + " ve " + sayi2 + " arkadaş sayılardır.");
  } else {
    console.log(sayi1 + " ve " + sayi2 + " arkadaş sayı değildir.");
  }
}

//arkadasKontrol(66928, 66992)

//1000 e kadar olan mükemmel sayılar. -3-

function mukemmelKontrol(kontrol) {
  let carpanlar = 0;
  let alias;
  for (let i = 1; i <= kontrol; i++) {
    alias = i;
    if (kontrol % i == 0) {
      carpanlar += i;      
    }
  }
  if (carpanlar == alias*2) {
    console.log(alias + " mükemmel sayı");
  } else {
    //console.log(alias +" mükemmel sayı değil");
  }
  carpanlar = 0;
}
let kontrolSayisi = 1;
for (let index = 0; index < 1000; index++) {
  //mukemmelKontrol(kontrolSayisi)
  kontrolSayisi++;  
}


// 1 den 1000'e kadarki asalları tespit eden metod. -4-
let sayi = 1;
for (let index = 0; index < 1000; index++) {
  //asalKontrol(sayi);
  sayi++;
}
