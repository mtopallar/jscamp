/************************   REST   ****************************** */

//rest (geriye kalan (parametreler)) ...products => rest parametre
//params - C#
//varArgs - Java
let showProducts = function (id,...products) {
    console.log(id)
    //console.log(products)
    console.log(products[0])
  }
  //console.log(typeof showProducts)
  //showProducts(10,["Elma","Armut","Karpuz"])//array içinde array olarak görür.
  //showProducts(10,"Elma","Armut","Karpuz") //array içinde 3 eleman görür.
  // ÇÜNKÜ ...products ın kendisi bir array'dir. Bunun içine bir array daha gönderirsen; ...products zaten array, içine bir de üç meyveli array ı önderdin ve array içinde array oldu başka bir yeyişle ...products arrayinin içinde tek nir eleman oldu o eleman da ["Elma","Armut","Karpuz"] array ı olur. Onun için array içinde array olur.
  
  /************************   SPREAD   ****************************** */
  
  // spread (ayrıştırmak)
  
  console.log(Math.max(1,2,3,4,50,4,60,14))
  //Math.max bizden rest değerler istiyor ...values şeklinde onun için virgüllerle ayrılmış olarak değerlerimizi gönderdik. Peki ya elimizde virgülle ayrılmış değil de array formunda değerler olsaydı?
  
  let points = [1,2,3,4,50,4,60,14]
  console.log(...points) //... ifadesi points i virgüllerden ayırdı.
  console.log(Math.max(...points))
  
  console.log(..."ABC","D",..."EFG","H") //stringler char array dir UNUTMA! stringlerde de ..."ABC" ve ..."EFG" ifadesi A B C E F G olarak seriyi ayırdı.
  
  /************************   DESTRUCTURING   ***************************** */
  //destruct (parçalamak)
  // kısa tanım: elimizdeki array ın değerlerini değişkenlere atama yöntemi
  let populations = [10000,20000,30000] // amacımız virgüller ile ayırdığımız her bir değeri bir değişkene atamak. populations[0] şeklinde kullanmak değil de her bir değer ayrı bir değişkene atansın istiyoruz.
  
  let [small,medium,high] = populations // destruct yapılırken değişkenler eşitliğin sol tarafına array formatında verilir. bu işlem sonucunda small değişkine 10000, medium değişkenine 20000, high değişkenine 30000 değerleri aktarılmış olacak.
  
  console.log(small)
  console.log(medium)
  console.log(high)
  
  let populations2 = [10000,20000,30000,[40000,100000]]
  let [sm,md,l,[xl,xxl]] = populations2
  console.log(sm)
  console.log(md)
  console.log(l)
  console.log(xl)
  console.log(xxl)
  
  function someFunction([small1],number) { //bana bir array gelecek ve arraydeki ilk değeri small1 değişkenine atayacağım demek.
    console.log(small1)
  }
  someFunction(populations) //bu kod populations array inin ilk değeri olan 10000 i small1 e atamış oldu.
  
  /*********************** Objenin destruct edilmesi **********************/
  
  let category = {id:1,name:"içecek"}
  console.log(category.id)
  console.log(category["name"]) //category nin name alanı.
  
  let {id,name} = category
  console.log(id)
  console.log(name)
  // objenin değişken adı ile destruct için tanımlanan adlar aynı olmayınca undefined hatası veriyor. mesela category nin 2 property si var biri id, diğeri name ya destruct ederken de let [id,name] = category şeklinde tanımlamak gerekiyor. let [a,b] = category şeklinde tanımladığında undefined oluyor. ya let in içindeki değişkenleri category nin property isimleri ile aynı yapınca ya da category nin property isimlerini let içinde verdiğin isimlerle değiştirince normal tanımlı olarak geliyor. bu obje destruct ında oluyor array destructunda değişken isimlerini istediğin gibi verebiliyorsun.