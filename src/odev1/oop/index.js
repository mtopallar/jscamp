/*************   CLASS lar INHERITANCE ve PROTOTYPING   ****************/

//değer atamaları prototype denen bir yapı ile yapılır. Aslında herşey bir fonksiyon ve fonksiyona prototip oluşturuluyor.

//constructor pattern. Java veya C# daki public'in karşılığı burada export yani örnek export class Customer{}
class Customer {
  constructor(id, customerNumber) {
      //önce ctor un bu içini okuma 23. satıra kadar normal oku oradan buraya gel.
    this.id = id //instance ın id si ctordaki id. unutma this.id instance ın id si çünkü this JS de instance demek.
    this.customerNumber = customerNumber // instance ın customerNumber ı ctordaki customer number. unutma this JS de instance demek. Böylece instance a da prototyping yaparak id ve customerNumber propertylerini eklemiş olduk.
  }
}

// Customer customer = new Customer() yerine
let customer = new Customer(1,"12345");
console.log(customer.id) // bu kon undefined döndü. class daki property lere ulaşamadık. e dışarda tanımlayamıyoruz. dışardan ulaşamıyoruz. ne yapacağız?

//prototyping yani bir nesneye bambaşka bir özellik ekleyebiliyoruz.
customer.name="Murat" //*** INSTANCE a a yapılan PROROTYPING ***
console.log(customer.name)

Customer.bisey = "Bişey"; //dikkat direk sınıfa atama yaptık instance a değil. *** CLASS a yapılan PROROTYPING
console.log(Customer.bisey) //çalışır.
console.log(customer.bisey) //undefined.
//Ancak hala ctor içindeki parametrelere ulaşamadık. Bunun için this keyword ünü kullanacağız. this kelimesi JS'de instance ı ifade eder yani buradaki 11 satırdaki küçük c ile başyana customer a. Buradan 6. ve 7.satırdaki tanımlamayı yaptık:
console.log(customer.customerNumber) // artık ctor daki customerNumber a erişebiliyoruz.


class IndividualCustomer extends Customer{
    //inherit ettik (bireysel müşteri)
    constructor(firstName,id,customerNumber){
        super(id,customerNumber) //super base demek base e id ve customerNumber ı gönderdik.
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    //inherit ettik (kurumsal müşteri)
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)//super base demek base e id ve customerNumber ı gönderdik.
        this.companyName = companyName
    }
}

//.map({})  bizim için array ı dönüyor. foreach gibi. O an gezdiği elemana takma isim veriyor. --tek satırlık işlem yapacağın zaman işerdeki süslü paranteze gerek yok. map ile oluşan değeri return de edebiliriz. mesela     .map(p=>{p.unitPrice = p.unitPrice * 1.18 return p})

// .filter() elimizdeki array ı filtrelemeye yarar. SONUÇTA YEPYENİ BİR ARRAY OLUŞTURUR. state management de ekranın yeniden render edilmesi için referansın değişmesi gerekir (eğer referans tipse) bu yüzden önemlidir. Referans değiştiği an ekran yeniden render edilir.

// .reduce() accumulator (acc) görevi görür. Örneğin sepetin total fiyatını göstermek için. Bir başlangıç değeri (örneğimiz için 0) verilir.
