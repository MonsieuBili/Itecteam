class person{
    constructor(firstName,dateOfBirth){
        this.firstName=firstName;
        this.dateOfBirth=dateOfBirth
    }
    calcul()
    {
        return new Date().getFullYear() - this.dateOfBirth.getFullYear()
    }


}
var raspuns= new person("Rafael",new Date("05-22-2005"))
console.log(raspuns.calcul())