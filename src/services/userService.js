//export dışarıdan import edileblir, default import edildiğinde default olarak bunu import et demekmiş (filebase)  yani import edilirken süslü parantezin içine almak gerekmiyor.

export default class UserService {
    constructor(loggerService){
        //this.realData = getCustomersFromDb();
        this.users=[]
        this.loggerService = loggerService
    }
  add(user) {
    this.users.push(user)
    this.loggerService.log(user);
  }

  list(){
      return this.users      
  }

  getById(id){
    return this.users.find(u=>u.id===id)
  }
}
