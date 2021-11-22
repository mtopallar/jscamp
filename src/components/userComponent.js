import UserService from "../services/userService.js"
import User from './../models/user.js';
import { BaseLogger, MongoLogger } from './../crossCuttingConcerns/logging/logger.js';
import Customer from "../models/customer.js";

//Ekran simülasyonu.
console.log("User component yüklendi")

let logger1 =  new BaseLogger()
let logger2  = new MongoLogger()
let  userService = new UserService(logger2)

let user1 = new User(1,"Engin","Demiroğ","Ankara");
let user2 = new User(2,"Baran","Gökçekli","Muğla")

userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))


//Playground :)
let customer = {id:1, firstName:"Engin"}
customer.lastName="Demiroğ" //prototyping (sonradan değer ekleme)
//console.log(customer.lastName)


console.log("-----------------------------------")

userService.load()



let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","sfsdfsdf")
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers),
console.log(userService.employees),
console.log(userService.errors)
console.log(userService.getCustomersSorted())