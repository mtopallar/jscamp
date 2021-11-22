export default class User{
    constructor(id, firstName, lastName, city, age){ 
        //prototyping yapıyoruz
        //ctor yine class newlenince çalışıyor.
        // this demek User class ı demek
        this.id=id
        this.firstName = firstName //this de firstName diye bişey oluştur onun da değeri parametre ile gelen firstName olsun işte bu tam da prototyping oluyor.
        this.lastName= lastName
        this.city = city
        this.age = age


    }
}